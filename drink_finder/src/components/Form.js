import React, { useContext, useState } from 'react'
import { CategoriesContext } from '../context/CategoriesContext'
import { RecipesContext } from '../context/RecipesContext'

const Form = () => {

    // State
    const [ inputValues, setInputValues ] = useState({
        ingredient: '',
        category: ''
    })

    // Use Context
    const { categories } = useContext(CategoriesContext)
    const { setSearch, setRequest } = useContext(RecipesContext)

    // Update state
    const handleChange = e => {
        setInputValues({
            ...inputValues,
            [e.target.name] : e.target.value
        })
    }

    // Submit form
    const handleSubmit = e => {
       e.preventDefault()
       
       setSearch(inputValues)
        setRequest(true)
    }

    return (
        <form
            className="col-12"
            onSubmit={handleSubmit}
        >
            <fieldset className="text-center">
                <legend>Search Drinks by Category or Ingredient</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="ingredient"
                        className="form-control"
                        type="text"
                        placeholder="Search by ingredient"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="category"
                        onChange={handleChange}
                    >
                        <option value="">-- Select Category --</option>
                        {categories.map(category => (
                            <option 
                                key={category.strCategory} 
                                value={category.strCategory} 
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>

                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Search"
                    />
                </div>
            </div>
        </form>
     
    )
}

export default Form