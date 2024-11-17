import React from 'react'

const Hero = ({data}) => {
  return (
    <div className='w-full h-[60vh] relative'>
        <div style={{
            background:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.8))`,
        }}
        className='w-full h-full absolute z-10'
        >
         </div>

        <img className='w-full h-full object-cover absolute z-0' src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}||${data.profile_path}`} alt="" />

       <div className='z-20 relative w-full h-full px-14 py-10 flex flex-col items-start justify-end '>
         <h1 className='text-4xl font-bold py-1'>{data.original_name || data.original_title}</h1>
        <p className='text-lg font-light tracking-wide leading-snug pb-4 w-[80%]'>{data.overview}...</p>
        <div className='flex gap-3 text-sm'>
            <span ><i class="text-yellow-500 ri-megaphone-fill"></i> {data.release_date}</span>
            <span ><i class="text-yellow-500 ri-shield-star-fill"></i> {data.media_type}</span>
        </div>

        <button className='text-xl px-4 py-2 border-2 border-purple-600 rounded-full my-4 hover:bg-purple-600 transition-all ease-in-out duration-200'>Watch Trailer</button>
       </div>

    </div>
  )
}

export default Hero