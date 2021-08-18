import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import strings from '../constants/strings';
import FavoriteFilterButtonStyle from '../styles/FavoriteFilterButton.style';

const FavoriteFilterButton = ({listFavorites}) => {
  const [pressed, setPressed] = useState(false);

  const onPressHandler = () => {
    setPressed(!pressed);
    pressed ? listFavorites(false) : listFavorites(true);
  };

  return (
    <View style={FavoriteFilterButtonStyle.container}>
      <TouchableOpacity
        style={[
          FavoriteFilterButtonStyle.button,
          pressed ? FavoriteFilterButtonStyle.buttonOn : FavoriteFilterButtonStyle.buttonOff,
        ]}
        onPress={onPressHandler}>
        <Text
          style={[
            FavoriteFilterButtonStyle.buttonText,
            pressed
              ? FavoriteFilterButtonStyle.buttonTextOn
              : FavoriteFilterButtonStyle.buttonTextOff,
          ]}>
          {strings.TEXT_FAVBUTTON}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FavoriteFilterButton;
