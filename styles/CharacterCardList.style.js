import { StyleSheet } from 'react-native';
import theme from '../themes/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.APP_PRIMARY_COLOR,
  },
  loadingText:{
    color: theme.FONT_PRIMARY_COLOR,
    fontSize: theme.FONT_SIZE_SUBTITLE    
  }
});