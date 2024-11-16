import  { useState , useEffect } from 'react'
import axios from '../utils/axios'
import { Link } from 'react-router-dom'
import noprofile from "/noprofile.jpg"

const TopNav = () => {

  const [query, setQuery] = useState("");
  // console.log(query);

  const [Search, setSearch] = useState([]);



      const GetSearches= async()=>{
          try{
              const { data }=await axios.get(`/search/multi?query=${query}`);
              console.log(data);
              setSearch(data.results)

          }catch(error){
              console.log("Error", error);
          }
      }

      useEffect(() => {
          
          GetSearches();
      }, [query]);




  return (
    <div className='w-full h-[10vh]  relative flex justify-start items-center px-10'>

      <i className="ri-search-2-line text-violet-300 text-xl"></i> 
      <input
      onChange={(e)=>{setQuery(e.target.value)}} 
      value={query}
      className='w-1/2 px-4 py-2 mx-5 text-xl outline-none bg-violet-300/20 rounded-3xl relative' type="text" placeholder='search movies or shows' /> 
   

      {
        query.length>0 && <i onClick={()=>{setQuery("")}} className="ri-close-large-fill text-violet-300 text-xl"></i>
      }

      
      

      <div className='w-1/2 max-h-[50vh] overflow-y-auto bg-violet-300/20 absolute top-[100%]'>

          {
              Search.map((item,i)=>(
                  <Link key={i} className='p-4 w-full hover:bg-violet-300/20 transition-all ease-in-out duration-300 border-b border-zinc-700 flex justify-start items-center gap-4'>
                      <img className='w-32 h-24 object-cover shadow-xl'  
                      src={
                        item.backdrop_path || item.profile_path ?
                        `https://image.tmdb.org/t/p/w500/${item.backdrop_path}||${item.profile_path}`
                        : noprofile
                      } alt="" />
                      <span>{item.name || item.title || item.original_title || item.original_name}</span>
                  </Link>
                ))
            }

          
         
      </div>
    </div>
  )
}

export default TopNav