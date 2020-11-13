import React, { createContext, useEffect, useState} from 'react'
import axios from 'axios'

// Create Context
export const ModalContext = createContext()

const ModalProvider = (props) => {

    // States
    const [ recipeId, setRecipeId ] = useState(null)
    const [ info, setInfo] = useState({})

    // API request
    const apiRequest = async () => {

        if (!recipeId) return

        const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        const response = await axios.get(url)

        setInfo(response.data.drinks[0])
    }

    // Update
    useEffect(() => {
        apiRequest()
    }, [recipeId])

    return ( 
        <ModalContext.Provider
            value={{
                info,
                setRecipeId,
                setInfo
            }}
        >
            {props.children}
        </ModalContext.Provider>
     )
}
 
export default ModalProvider