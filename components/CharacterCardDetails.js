import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import CharacterCardDetailsStyle from '../styles/CharacterCardDetails.style'
import strings from '../constants/strings'
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../themes/theme';

const CharacterCardDetails = ({route, navigation}) => {
    const { character, addFavorite, removeFavorite } = route.params;

    const [favorite, setFavorite] = useState(character.favorite)

    const onPressReturn = () => {
        navigation.goBack()
    }

    const onPressFavorite = () => {
        setFavorite(!favorite)
        if (favorite){
            removeFavorite(character.name)
        }else{
            addFavorite(character.name)
        } 
    }

    return (
        <View style={CharacterCardDetailsStyle.returnContainer}>
            <Text style={CharacterCardDetailsStyle.returnText} onPress={onPressReturn}>{strings.TEXT_GOBACKTOLIST}</Text>
            <View style={CharacterCardDetailsStyle.container}>
                <View style={CharacterCardDetailsStyle.infoContainer}>
                    <View style={CharacterCardDetailsStyle.cardHeader}>
                        <Text style={CharacterCardDetailsStyle.cardHeaderText}>{character.name}</Text>
                        <TouchableOpacity
                            onPress={() => onPressFavorite()}
                        >
                            {favorite ? <Icon style={CharacterCardDetailsStyle.cardIcon} name='star' size={theme.ICON_SIZE_SMALL} color={theme.ICON_STAR_COLOR}/> 
                                    : <Icon style={CharacterCardDetailsStyle.cardIcon} name='star-o' size={theme.ICON_SIZE_SMALL} color={theme.ICON_STAR_COLOR}/>}
                        </TouchableOpacity>
                    </View>
                    <Text style={CharacterCardDetailsStyle.cardDetailsText}>{character.gender}</Text>
                    <Text style={CharacterCardDetailsStyle.cardDetailsText}>{strings.TEXT_BIRTHDATE}{character.birth_year}</Text> 
                    <Text style={CharacterCardDetailsStyle.cardDetailsText}>{strings.TEXT_FILMS}{character.films.length}</Text> 
                    <Text style={CharacterCardDetailsStyle.cardDetailsText}>{strings.TEXT_HEIGHT}{character.height} | {strings.TEXT_MASS}{character.mass}</Text> 
                </View>
            </View>
        </View>
    )
}

export default CharacterCardDetails
