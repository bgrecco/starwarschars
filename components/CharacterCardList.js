import React, {useState, useEffect} from 'react'
import {FlatList, View, Text} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import urls from '../constants/urls'
import strings from '../constants/strings'
import { getCharacters } from '../services/CharacterServices';
import CharacterCardListStyle from '../styles/CharacterCardList.style'
import FavoriteFilterButton from './FavoriteFilterButton'
import CharacterCard from './CharacterCard'
import Pagination from './CharacterCardPag'

const CharacterCardList = ( {navigation} ) => {
    const [loading, setLoading] = useState(false)
    const [currentPageURL, setCurrentPageURL] = useState(urls.SWAPI_BASEURL_PEOPLE);
    const [nextPageURL, setNextPageURL] = useState()
    const [prevPageURL, setPrevPageURL] = useState()
    const [characters, setCharacters] = useState([])
    const [favoriteCharacters, setFavoriteCharacters] = useState([])
    
    const getFavoriteCharacters = async () => {
        favoriteChars = favoriteCharacters
        const favCharsObj = await AsyncStorage.getItem('favoriteChars')
        JSON.parse(favCharsObj).forEach(favChar => {
            favoriteChars.push(favChar)
        })
        setFavoriteCharacters(favoriteChars)
    }

    const loadFavoriteCharacters = (characters) => {
        if (favoriteCharacters.length > 0){
            characters.forEach(character => {
                const foundCharacter = favoriteCharacters.find(favoriteCharacter => favoriteCharacter.name === character.name)
                if (foundCharacter != undefined){
                    character.favorite = true
                }
            });
            
        }
        return characters
    }   

  const loadCharacters = async () => {
        const response = await getCharacters(currentPageURL)
        if (response.status === 200){
            setLoading(false)
            setNextPageURL(response.data.next)
            setPrevPageURL(response.data.previous)
            setCharacters(loadFavoriteCharacters(response.data.results))
            return response.data.results
        }
        return []
    }
    
    useEffect(async() => {
        await getFavoriteCharacters()
        setCharacters(await loadCharacters())
    }, [])

    useEffect(async() => {
        setCharacters(await loadCharacters())
    }, [currentPageURL])

    const setData = async () => {
        try {
            await AsyncStorage.setItem('favoriteChars', JSON.stringify(favoriteCharacters))
        }catch (error){
            console.error(error)
        }
    }

    const addFavorite = async (name) => {
        const favChars = favoriteCharacters
        favChars.push({name})
        setFavoriteCharacters(favChars)
        setData()
        setCharacters(await loadCharacters())
    }

    const removeFavorite = async (name) => {
        const favChars = favoriteCharacters
        const index = favChars.map(function(favChar) { return favChar.name; }).indexOf(name);
        if (index > -1) {
            favChars.splice(index, 1);
        }
        setFavoriteCharacters(favChars)
        setData()
        setCharacters(await loadCharacters())
    }

    const listFavorites = async (pressed) => {
        setLoading(true)
        pressed ? setCharacters(prevCharacters => {
            setLoading(false)
            return prevCharacters.filter(character => character.favorite == true);
        }) : setCharacters(await loadCharacters()) 
    }

    const gotoNextPage = async () => {
        setLoading(true)
        setCurrentPageURL(nextPageURL)
    }

    const gotoPrevPage = async () => {
        setLoading(true)
        setCurrentPageURL(prevPageURL)
    }

    return (
        <View style={CharacterCardListStyle.container}>
            {loading ? <Text style={CharacterCardListStyle.loadingText}>{strings.TEXT_LOADING}</Text>  
            : <>
                <FavoriteFilterButton listFavorites={listFavorites}/>
                <FlatList
                    data={characters}
                    renderItem={({item}) => <CharacterCard character={item} addFavorite={addFavorite} removeFavorite={removeFavorite} navigation={navigation}/>}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
                <Pagination
                    gotoNextPage={nextPageURL ? gotoNextPage : null}
                    gotoPrevPage={prevPageURL ? gotoPrevPage : null}
                />
             </>
            }
        </View>
    )
}

export default CharacterCardList