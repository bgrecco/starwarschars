import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CharacterCardStyle from '../styles/CharacterCard.style'
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../themes/theme';

const CharacterCard = ({character, navigation}) => {

    const onPressHandler = () => {
        navigation.navigate('CharacterDetails', {character});
    }

    return (
        <View style={CharacterCardStyle.container}>
            <TouchableOpacity
                onPress={onPressHandler}
            >
                <View style={CharacterCardStyle.cardHeader}>
                    <Text style={CharacterCardStyle.cardHeaderText}>{character.name}</Text>
                    {character.favorite && <Icon style={CharacterCardStyle.cardIcon} name='star' size={theme.ICON_SIZE_SMALL} color={theme.ICON_STAR_COLOR}/>}
                </View>
                <Text style={CharacterCardStyle.cardDetailsText}>{character.gender} | {character.birth_year}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CharacterCard
