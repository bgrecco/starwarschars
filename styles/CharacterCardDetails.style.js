import { StyleSheet } from 'react-native';
import theme from '../themes/theme';

export default StyleSheet.create({
  returnContainer:{
    flex: 1,
    paddingTop: 20,
    paddingLeft: 12,
    backgroundColor: theme.APP_PRIMARY_COLOR,
  },
  returnText:{
    fontSize: theme.FONT_SIZE_TEXT,
    color: theme.FONT_PRIMARY_COLOR,
  },
  container: {
    alignItems: 'center',
  },
  infoContainer:{
    padding: 20,
  },
  cardHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardHeaderText:{
    fontSize: theme.FONT_SIZE_TITLE,
    color: theme.FONT_PRIMARY_COLOR,
  },
  cardDetailsText:{
    fontSize: theme.FONT_SIZE_SUBTITLE,
    color: theme.FONT_SECONDARY_COLOR,
  },
  cardIcon:{
    paddingLeft: 10,
    paddingTop: 4,
  }
});