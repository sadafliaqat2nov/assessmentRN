import {StyleSheet} from 'react-native';
import * as util from '../utilities/index';

export default StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: util.colors.white,
    padding: util.WP(5),
  },
  container: {flex: 1, backgroundColor: util.colors.white},
  boldText: {
    fontSize: util.WP(6),
    fontWeight: 'bold',
    paddingVertical: util.WP(2),
    color: util.colors.border,
  },
  normalText: {
    fontSize: util.WP(4),
    color: util.colors.black,
  },
  resultText: {
    fontSize: util.WP(4.2),
    color: util.colors.eggplant,
    fontWeight: 'bold',
    marginBottom: util.WP(2),
  },
  cardView: {
    padding: util.WP(3),
    backgroundColor: util.colors.cloud,
    marginVertical: util.WP(2),
    borderRadius: util.WP(2),
  },
  resultCardView: {
    padding: util.WP(3),
    backgroundColor: util.colors.lightPurple,
    marginVertical: util.WP(2),
    borderRadius: util.WP(2),
  },
  // search bar
  searchBar: {
    height: util.WP(11),
    marginTop: util.WP(4),
    borderWidth: util.WP(0.1),
    paddingHorizontal: util.WP(2),
    borderRadius: util.WP(15),
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarTextInput: {
    fontSize: util.WP(3.5),
    color: util.COLOR_BLACK,
    height: util.WP(11),
    width: util.WP(78),
  },
  searchIcon: {
    paddingHorizontal: util.WP(2),
  },
});
