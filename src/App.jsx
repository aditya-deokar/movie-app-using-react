import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'

const App = () => {
  return (
    <div className='w-full h-screen bg-slate-950 text-white font-[Open Sans]'>

      <Routes>

          <Route path='/' 
                  element={ <Home />}
          />
          <Route path='/trending' 
                  element={ <Trending />}
          />
          <Route path='/popular' 
                  element={ <Popular />}
          />
          <Route path='/allmovies' 
                  element={ <Movies/>}
          />

      </Routes>
    
    </div>
  )
}

export default App