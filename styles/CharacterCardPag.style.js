import { StyleSheet } from 'react-native';
import theme from '../themes/theme';

export default StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonContainer:{
      paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    padding: 5,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: theme.BUTTON_SECONDARY_COLOR,
  },
  buttonText:{
    paddingHorizontal: 25,
    color: theme.FONT_PRIMARY_COLOR,
  },
});