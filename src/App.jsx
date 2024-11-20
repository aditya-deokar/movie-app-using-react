import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

import Trending from './components/Trending'
import Popular from './components/Popular'
import Movies from './components/Movies'

import TvShows from './components/TvShows'
import Peoples from './components/Peoples'

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
          <Route path='/tvseries' 
                  element={ <TvShows/>}
          />
          <Route path='/peoples' 
                  element={ <Peoples />}
          />

      </Routes>
    
    </div>
  )
}

export default App