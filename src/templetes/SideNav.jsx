import React from 'react'
import { NavLink } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className="w-[20%] h-screen  border-r-2 border-zinc-800 p-3">
        <h1 className='text-2xl font-semibold'> <span><i class="ri-film-ai-fill text-purple-600 font-normal pr-1"></i></span>Movie App</h1>
        <nav className='flex flex-col gap-2 p-4'>
            <h1 className='text-xl font-semibold my-6'>New Feeds</h1>

            <NavLink className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150 ">
                <span><i class="ri-fire-fill  text-purple-400 font-normal pr-1"></i></span>Treanding</NavLink>
            <NavLink className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150"><span><i class="ri-bard-fill text-purple-400 font-normal pr-1"></i></span>Popular</NavLink>
            <NavLink className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150"><span><i class="ri-movie-2-fill  text-purple-400 font-normal pr-1"></i></span>Movies</NavLink>
            <NavLink className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150" ><span><i class="ri-tv-fill  text-purple-400 font-normal pr-1"></i></span>TV Shows</NavLink>
            <NavLink className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150"><span><i class="ri-group-fill  text-purple-400 font-normal pr-1"></i></span>Peoples</NavLink>

        </nav>

        <hr className='border-zinc-800' />

        <nav className='flex flex-col gap-2 p-4'>
            <h1 className='text-xl font-semibold my-6'>Website Information</h1>

            <NavLink className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150 ">
                <span><i class="ri-file-info-fill  text-purple-400 font-normal pr-1"></i></span>About</NavLink>
            <NavLink className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150"><span><i class="ri-phone-fill text-purple-400 font-normal pr-1"></i></span>Contact</NavLink>
           

        </nav>
    </div>
  )
}

export default SideNav