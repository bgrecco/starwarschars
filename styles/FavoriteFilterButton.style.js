import { StyleSheet } from 'react-native';
import theme from '../themes/theme';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.BUTTON_SECONDARY_COLOR,
  },
  buttonOn:{
    backgroundColor: theme.BUTTON_SECONDARY_COLOR,
  },
  buttonOff:{
    backgroundColor: theme.BUTTON_PRIMARY_COLOR,
  },
  buttonText:{
    paddingHorizontal: 25,
  },
  buttonTextOn:{
    color: theme.FONT_SECONDARY_COLOR,
  },
  buttonTextOff:{
    color: theme.FONT_PRIMARY_COLOR,
  }
});