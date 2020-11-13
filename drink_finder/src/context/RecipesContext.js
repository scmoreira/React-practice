import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const RecipesContext = createContext()

const RecipesProvider = (props) => {

    // States
    const [recipes, setRecipes] = useState([])
    const [search, setSearch] = useState({
        ingredient: '',
        category: ''
    })
    const [ request, setRequest] = useState(false)

    // Destructuring
    const { ingredient, category } = search
    
    // API request
    const apiRequest = async () => {
        
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`
        const response = await axios.get(url)

        setRecipes(response.data.drinks)
    }

    useEffect(() => {
        if (request) {
            apiRequest()
          }
    // eslint-disable-next-line
    }, [search])

    return ( 
        <RecipesContext.Provider
            value={{
                recipes,
                setSearch,
                setRequest
            }}
        >
            {props.children}
        </RecipesContext.Provider>
     )
}
 
export default RecipesProvider