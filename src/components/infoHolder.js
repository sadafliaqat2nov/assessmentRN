import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

const infoHolder = props => {
  const {item, pivotCard} = props;
  return (
    <View style={pivotCard ? styles.home.resultCardView : styles.home.cardView}>
      <Text style={styles.home.normalText}>Name: {item.name}</Text>
      <Text style={styles.home.normalText}>Age: {item.age}</Text>
      <Text style={styles.home.normalText}>Worth Unit: {item.worthUnit}</Text>
      <Text style={styles.home.normalText}>Net Worth: {item.netWorth}</Text>
    </View>
  );
};

export default infoHolder;
