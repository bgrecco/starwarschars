import React from 'react';
import {View, Text} from 'react-native';
import strings from '../constants/strings';
import HeaderStyle from '../styles/Header.style';

const Header = () => {
  return (
    <View style={HeaderStyle.headerContainer}>
      <Text style={HeaderStyle.headerText}>{strings.TEXT_APP_TITLE}</Text>
      <View style={HeaderStyle.headerLine} />
    </View>
  );
};

export default Header;
