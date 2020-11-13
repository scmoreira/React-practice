import React, { useState, useEffect } from 'react'

import Form from './Form'
import ImageList from './ImageList'

function App() {

  // States
  const [ search, setSearch ] = useState('')
  const [ images, setImages] = useState([])
  const [ currentPage, setCurrentPage ] = useState(1)
  const [totalPages, setTotalPages] = useState(5)

  const imagesByPage = 30
  
  // API request
  const consultarApi = async () => {

    if (search === '') return
    
    const apiKey = 'YourApiKeyHere'
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${search}&per_page=${imagesByPage}&page=${currentPage}`

    const response = await fetch(url)
    const result = await response.json()

    setImages(result.hits)

    // Calculate total pages
    const calculateTotalPages = Math.ceil(result.totalHits / imagesByPage )
    setTotalPages(calculateTotalPages)
    
  }

  useEffect(() => {

    consultarApi()

    // Scroll
    const jumbotron = document.querySelector('.jumbotron')
    jumbotron.scrollIntoView({ behavior: 'smooth' })
    
  }, [search, currentPage])

  // Define previous page
  const previousPage = () => {
    const newCurrentPage = currentPage - 1

    if(newCurrentPage === 0 ) return

    setCurrentPage(newCurrentPage)
  }

  // Define next page
  const nextPage = () => {
    const newCurrentPage = currentPage + 1

    if(newCurrentPage > totalPages ) return

    setCurrentPage(newCurrentPage)
  }

  return (
    <div className="container">
      <div className="jumbotron">
          <p className="lead text-center">Images searcher</p>

          <Form setSearch={setSearch} />
      </div>

      <div className="row justify-content-center">
          <ImageList images={images} />

          { (currentPage > 1) && (
            <button 
                type="button"
                className="btn btn-dark mr-1"
                onClick={previousPage}
            >&laquo; Previous </button>
          ) }

          { (currentPage != totalPages) && (
            <button 
              type="button"
              className="btn btn-dark mr-1"
              onClick={nextPage}
            >Next &raquo;</button>
          ) }
      </div>
    </div>
  )
}

export default App