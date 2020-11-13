import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const CategoriesContext = createContext() 

// Create Context
const CategoriesProvider = (props) => {

    // States
    const [categories, setCategories] = useState([])

    // API request
    const apiRequest = async () => {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
        const response = await axios.get(url)

        setCategories(response.data.drinks)
    }

    // Update
    useEffect(() => {
        
        apiRequest()

    }, [])

    return (
        <CategoriesContext.Provider
            value={{
                categories
            }}
        >
           {props.children} 
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider


