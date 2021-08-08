import React, {useState} from 'react'
import { FlatList, View} from 'react-native'
import CharacterCard from './CharacterCard'
import CharacterCardListStyle from '../styles/CharacterCardList.style'

const CharacterCardList = ( {characters, navigation} ) => {

    return (
        <View style={CharacterCardListStyle.container}>
            <FlatList
                data={characters}
                renderItem={({item}) => <CharacterCard character={item} navigation={navigation}/>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default CharacterCardList