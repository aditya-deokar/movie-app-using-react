
import { NavLink } from 'react-router-dom'
import Logo from './Logo'

const SideNav = () => {

   
    


  return (
    <div className="w-[20%] h-screen  border-r-2 border-zinc-800 p-3">
        <Logo/>
        <nav className='flex flex-col gap-2 p-4'>
            <h1 className='text-xl font-semibold my-6'>New Feeds</h1>

            <NavLink to="/trending " className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150 ">
                <span><i className="ri-fire-fill  text-purple-400 font-normal pr-1"></i></span>Treanding</NavLink>

            <NavLink to="/popular" className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150"><span><i className="ri-bard-fill text-purple-400 font-normal pr-1"></i></span>Popular</NavLink>

            <NavLink to="/allmovies" className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150"><span><i className="ri-movie-2-fill  text-purple-400 font-normal pr-1"></i></span>Movies</NavLink>

            <NavLink to="/tvseries" className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150" ><span><i className="ri-tv-fill  text-purple-400 font-normal pr-1"></i></span>TV Shows</NavLink>

            <NavLink to="/peoples" className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150"><span><i className="ri-group-fill  text-purple-400 font-normal pr-1"></i></span>Peoples</NavLink>


        </nav>

        <hr className='border-zinc-800' />

        <nav className='flex flex-col gap-2 p-4'>
            <h1 className='text-xl font-semibold my-6'>Website Information</h1>

            <NavLink className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150 ">
                <span><i className="ri-file-info-fill  text-purple-400 font-normal pr-1"></i></span>About</NavLink>
            <NavLink className="px-3 py-2 hover:bg-indigo-600 transition-all ease-in-out duration-150"><span><i className="ri-phone-fill text-purple-400 font-normal pr-1"></i></span>Contact</NavLink>
           

        </nav>
    </div>
  )
}

export default SideNav