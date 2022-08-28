import {Alert} from 'react-native';

export const handleChange = (value, key, object) => {
  let temp = object;
  temp[key] = value;
  return temp;
};
export const showAlert = (message) => {
  Alert.alert('Alert', message);
};
