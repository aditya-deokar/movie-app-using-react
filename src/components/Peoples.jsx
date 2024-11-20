import React, { useEffect, useState } from 'react'
import Logo from '../templetes/Logo'
import TopNav from '../templetes/TopNav'
import DropdownMenu from '../templetes/DropdownMenu'
import axios from '../utils/axios'
import MovieCard from '../templetes/MovieCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'

const Peoples = () => {
  
    const [moviedata, setMoviedata] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
  
    const navigate=useNavigate();
  
    console.log(moviedata);
    // console.log(page)
  
    
  
    async function GetTrendingMovies(){
      try{
        const  {data} = await axios.get(`https://api.themoviedb.org/3/trending/person/week`);
        // setMoviedata(data.results);
  
        if(data.results.length > 0){
          setMoviedata((prevMovie)=>[...prevMovie , ...data.results]);
          setPage(page + 1);
        }else{
          sethasMore(false);
        }
        
        
  
        }catch(error){
          console.log("error",error);
        }
  
    }
  
    const refreshHandler=()=>{
      if(moviedata.length===0){
       GetTrendingMovies();
      }
      else {
        setPage(1);
        setMoviedata([]);
        GetTrendingMovies();
      }
  
  
     
      
    }
  
    useEffect(() => {
      refreshHandler();
      console.log(page)
     
    }, [])
    
  
    return (
      <section className='w-full flex flex-col'>
        
          <div className='w-full h-[10vh] z-20 flex fixed bg-slate-950/50'>
            <div className='w-[20%]  p-3 '>
                <Logo/>
            </div>
          
          <div className='w-[50%] flex '>
              <TopNav />
          </div>
  
          
          </div>
  
          <div className='w-full py-10 bg-slate-950 mt-[10vh]'>
  
            <h1 className='text-xl w-full bg-slate-950/50 py-4 z-10 sticky top-[10vh] px-12 mb-4'>
            <span onClick={()=>navigate(-1)}><i className="ri-arrow-left-box-fill text-purple-400 font-normal pr-1"></i></span>
              All Tv Series</h1>
  
           
  
              <InfiniteScroll
                  dataLength={moviedata.length}
                  next={GetTrendingMovies}
                  hasMore={hasMore}
                  loader={<h4>Loading...</h4>}
              >
  
                    <div className='flex justify-center items-start w-fit  flex-wrap gap-5'>
                    {
                      moviedata.map((item,id)=>(
                          <div className='w-60 h-80 bg-slate-900 relative hover:scale-105 hover:shadow-2xl transition-all ease-in-out duration-300  '>
                              <img className='w-full h-[80%] overflow-hidden bg-red-200 object-cover' src={`https://image.tmdb.org/t/p/w500${item.profile_path}`} alt="" />
                              <div className='p-4'>
                                  <h1 className='text-xl'>{item.original_name || item.name || item.original_title}</h1>
                              </div>
                          </div>
                      ))
                    }
                    </div>
              </InfiniteScroll>
           
           
  
          </div>
  
       
      </section>
    )
  }
  


export default Peoples