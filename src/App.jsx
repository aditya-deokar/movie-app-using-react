import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

const App = () => {
  return (
    <div className='w-full h-screen bg-slate-900'>

      <Routes>

          <Route path='/' 
                  element={ <Home />}
          />

      </Routes>
    
    </div>
  )
}

export default App