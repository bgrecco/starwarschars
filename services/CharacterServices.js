import axios from "axios"

export async function getCharacters(currentPageURL){
    try {
        const response = await axios({
            url: currentPageURL,
            method: 'GET',
        })
        return response
    } catch (error) {
        console.log('Error: ' + error)
    }
}