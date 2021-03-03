import React, { useState } from 'react'
import Parent from './components/parent/Parent'
import Header from './components/header/Header'
import { ValueContext } from './contexts/ValueContext'

function App() {
  let value = useState(25)

  return (
    <div className='container'>
      <Header />
      <hr />
      <ValueContext.Provider value={value}>
        <div className='block'>
          <Parent />
        </div>
      </ValueContext.Provider>
    </div>
  )
}

export default App
