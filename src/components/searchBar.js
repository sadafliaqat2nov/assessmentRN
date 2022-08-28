import React from 'react';
import {TextInput, Text, View, TouchableOpacity, Image} from 'react-native';
import styles from '../styles/index';
import * as util from '../utilities';
import Icon from 'react-native-vector-icons/MaterialIcons';

class searchBar extends React.Component {
  render() {
    const {action, value, setValue} = this.props;
    return (
      <View style={styles.home.searchBar}>
        <TouchableOpacity onPress={action}>
          <Icon
            name="keyboard-backspace"
            size={util.WP(5)}
            color={util.COLOR_GRAY}
            style={styles.home.searchIcon}
          />
        </TouchableOpacity>
        <TextInput
          value={value}
          style={styles.home.searchBarTextInput}
          onChangeText={setValue}
          placeholder="Enter text to search"
          returnKeyType="search"
        />
      </View>
    );
  }
}

export default searchBar;
