import { StyleSheet } from 'react-native';
import theme from '../themes/theme';

export default StyleSheet.create({
  headerContainer: {
    paddingLeft: 20,
    paddingTop: 20,
    height: 70,  
  },
  headerText: {
    fontSize: theme.FONT_SIZE_TITLE,
    fontWeight: theme.FONT_WEIGHT_HEAVY,
    color: theme.FONT_PRIMARY_COLOR,
    textAlign: 'left',
  },
  headerLine: {
    paddingTop: 7,
    marginRight: 60,
    borderBottomColor: theme.APP_SECONDARY_COLOR,
    borderBottomWidth: 1,
  }
});