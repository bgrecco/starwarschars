import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import strings from '../constants/strings';
import CharacterCardPagStyle from '../styles/CharacterCardPag.style';

const CharacterCargPag = ({gotoPrevPage, gotoNextPage}) => {
  return (
    <View style={CharacterCardPagStyle.container}>
      <View style={CharacterCardPagStyle.buttonContainer}>
        {gotoPrevPage && (
          <TouchableOpacity style={CharacterCardPagStyle.button} onPress={gotoPrevPage}>
            <Text style={CharacterCardPagStyle.buttonText}>{strings.TEXT_PREVIOUS}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={CharacterCardPagStyle.buttonContainer}>
        {gotoNextPage && (
          <TouchableOpacity style={CharacterCardPagStyle.button} onPress={gotoNextPage}>
            <Text style={CharacterCardPagStyle.buttonText}>{strings.TEXT_NEXT}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CharacterCargPag;
