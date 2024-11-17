import React from 'react'

const MovieCard = ({item}) => {
  return (
    <div className='w-60 h-80 bg-slate-900 relative hover:scale-105 hover:shadow-2xl transition-all ease-in-out duration-300  '>
        <img className='w-full h-[55%] overflow-hidden bg-red-200 object-cover' src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}||${item.profile_path}`} alt="" />
       <div className='p-4'>
            <h1 className='text-xl'>{item.original_name || item.name || item.original_title}</h1>
            <p className='text-md '>{item.overview.slice(0,50)}...</p>
       </div>
    </div>
  )
}

export default MovieCard