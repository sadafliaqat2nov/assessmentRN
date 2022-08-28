import React, {useEffect, useState, useRef} from 'react';
import {View, FlatList, Text, SafeAreaView, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import InfoHolder from '../../components/infoHolder';
import SearchBar from '../../components/searchBar';
import {searchData} from '../../store/slices/searchSlice';
import styles from '../../styles';
import * as util from '../../utilities';

const homeScreen = () => {
  const [result, setResult] = useState([]);
  const [personData, setPersonData] = useState(util.personsData);
  const [searchText, setSearchText] = useState('');
  const resultantSearch = useSelector(state => state.search.searchedObj);
  const dispatch = useDispatch();

  // 1 - on useEffect get net worth array from persons data
  // 2 - for loop on networth array to calculate sum of left and right values
  // 3 - calculate sum from netWorth array

  const calculateSum = data => data?.reduce((acc, x) => acc + x, 0);
  useEffect(() => {
    const _data = util.personsData?.map(val => val.netWorth);
    const pivotIndex = (_data = []) => {
      for (let i = 0; i < _data?.length; i++) {
        const leftSum = calculateSum(_data?.slice(0, i));
        const rightSum = calculateSum(_data?.slice(i + 1));
        if (leftSum === rightSum) {
          return i;
        }
      }
      return -1;
    };
    let pivotObject = util.personsData[pivotIndex(_data)];
    setResult(pivotObject || '');
  }, [util.personsData]);

  const searchFilterFunction = text => {
    setSearchText(text);
    dispatch(searchData(text));
    text === '' && dispatch(searchData(''));
  };

  const renderCard = ({item}) => {
    return <InfoHolder item={item} />;
  };

  return (
    <SafeAreaView style={styles.home.container}>
      <SearchBar
        value={searchText}
        action={() => {
          searchFilterFunction(''), setPersonData(util.personsData);
        }}
        setValue={value => searchFilterFunction(value)}
      />
      {resultantSearch && (
        <View style={styles.home.cardView}>
          <Text style={styles.home.normalText}>{resultantSearch?.name}</Text>
          <Text style={styles.home.normalText}>{resultantSearch?.age}</Text>
          <Text style={styles.home.normalText}>{resultantSearch?.count}</Text>
        </View>
      )}
      <ScrollView>
        {result && (
          <View>
            <Text style={styles.home.boldText}>Found Pivot</Text>
            <InfoHolder pivotCard item={result} />
          </View>
        )}
        <Text style={styles.home.boldText}>Given List</Text>
        <FlatList
          data={personData}
          keyExtractor={index => `${index}`}
          renderItem={renderCard}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default homeScreen;
