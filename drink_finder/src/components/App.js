import React from 'react'

import CategoriesProvider from '../context/CategoriesContext'
import RecipesProvider from '../context/RecipesContext'
import ModalProvider from '../context/ModalContext'

import Header from './Header'
import Form from './Form' 
import RecipesList from './RecipesList'

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header />

          <div className='container mt-5'>
            <div className='row'>
              <Form />
            </div>
            <RecipesList />
            </div>
          </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  )
}

export default App
