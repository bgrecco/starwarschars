import React, { useState } from 'react'
import { View } from 'react-native'
import CharactersScreenStyle from '../styles/CharactersScreen.style'
import FavoriteFilterButton from './FavoriteFilterButton'
import CharacterCardList from './CharacterCardList'

const CharactersScreen = ( {navigation} ) => {
    const [characters, setCharacters] = useState([
        {name: 'Luke SkyWalker', gender: 'Male', birth_year: 'Birth date: 19BBY', filmsNum: 'Amount of films: 3', height: 'Height: 1,70m', mass: 'Mass: 90kg', favorite: false},
        {name: 'Luke Sky', gender: 'Male', birth_year: 'Birth date: 19BBY', filmsNum: 'Amount of films: 1', height: 'Height: 1,56m', mass: 'Mass: 120kg', favorite: true},
        {name: 'Luke SkyWalker', gender: 'Male', birth_year: 'Birth date: 19BBY', filmsNum: 'Amount of films: 6', height: 'Height: 1,44m', mass: 'Mass: 68kg', favorite: true},
        {name: 'Luke SkyWalker', gender: 'Male', birth_year: 'Birth date: 19BBY', filmsNum: 'Amount of films: 2', height: 'Height: 1,92m', mass: 'Mass: 82kg', favorite: false}
    ])

    const listFavorites = (pressed) => {
        pressed ? setCharacters(prevCharacters => {
            return prevCharacters.filter(item => item.favorite == true);
        }) : setCharacters(prevCharacters => {
            return prevCharacters = [
                {name: 'Luke SkyWalker', gender: 'Male', birth_year: 'Birth date: 19BBY', filmsNum: 'Amount of films: 3', height: 'Height: 1,70m', mass: 'Mass: 90kg', favorite: false},
                {name: 'Luke Sky', gender: 'Male', birth_year: 'Birth date: 19BBY', filmsNum: 'Amount of films: 1', height: 'Height: 1,56m', mass: 'Mass: 120kg', favorite: true},
                {name: 'Luke SkyWalker', gender: 'Male', birth_year: 'Birth date: 19BBY', filmsNum: 'Amount of films: 6', height: 'Height: 1,44m', mass: 'Mass: 68kg', favorite: true},
                {name: 'Luke SkyWalker', gender: 'Male', birth_year: 'Birth date: 19BBY', filmsNum: 'Amount of films: 2', height: 'Height: 1,92m', mass: 'Mass: 82kg', favorite: false}
            ]
        }) ;
    }

    return (
        <View style={CharactersScreenStyle.container}>
            <FavoriteFilterButton listFavorites={listFavorites}/>
            <CharacterCardList characters={characters} navigation={navigation}/>
        </View>
    )
}

export default CharactersScreen
