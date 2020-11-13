import React, { useState } from 'react'

import styled from '@emotion/styled'

import Spinner from './components/shared/Spinner'
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary'
import Total from './components/Total'

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const FormContainer = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`

function App() {

  // States
  const [summary, setSummary] = useState({})
  const [loading, setLoading] = useState(false)
  const { quote, data } = summary

  return (
    <Container>
      <Header title='Car Insurance Quote' />

      <FormContainer>
        
        <Form setSummary={setSummary} setLoading={setLoading} />

        {loading && <Spinner /> }
        
        {data && <Summary data={data} />}

        {(quote > 0) && <Total quote={quote} />}

      </FormContainer>

    </Container>
  )
}

export default App
