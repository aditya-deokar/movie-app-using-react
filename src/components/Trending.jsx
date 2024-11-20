import React, { useEffect, useState } from 'react'
import Logo from '../templetes/Logo'
import TopNav from '../templetes/TopNav'
import DropdownMenu from '../templetes/DropdownMenu'
import axios from '../utils/axios'
import MovieCard from '../templetes/MovieCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useNavigate } from 'react-router-dom'


const Trending = () => {

  const [Category ,setCategory]=useState("all");
  const [Duration, setDuration] = useState("day");
  const [moviedata, setMoviedata] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const navigate=useNavigate();

  console.log(moviedata);
  console.log(page)

  

  async function GetTrendingMovies(){
    try{
      const  {data} = await axios.get(`https://api.themoviedb.org/3/trending/${Category}/${Duration}?page=${page}`);
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
   
  }, [Category , Duration])
  

 





  return (
    <section className='w-full flex flex-col'>
      
        <div className='w-full h-[10vh] z-20 flex fixed bg-slate-950/50'>
          <div className='w-[20%]  p-3 '>
              <Logo/>
          </div>
        
        <div className='w-[50%] flex '>
            <TopNav />
        </div>

        <div className=' pt-5 flex gap-5'>
            <DropdownMenu func={(e)=>setCategory(e.target.value)} name={"category"} options={['all','movie','tv']}/>
            <DropdownMenu func={(e)=>setDuration(e.target.value)} name={"duration"} options={['day','week']}/>
        </div>
        </div>

        <div className='w-full py-10 bg-slate-950 mt-[10vh]'>

          <h1 className='text-xl w-full bg-slate-950/50 py-4 z-10 sticky top-[10vh] px-12 mb-4'>
          <span onClick={()=>navigate(-1)}><i className="ri-arrow-left-box-fill text-purple-400 font-normal pr-1"></i></span>
            Trending Movies</h1>

         

            <InfiniteScroll
                dataLength={moviedata.length}
                next={GetTrendingMovies}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}
            >

                  <div className='flex justify-center items-start w-fit  flex-wrap gap-5'>
                  {
                    moviedata.map((item,id)=><MovieCard key={id} item={item}/>)
                  }
                  </div>
            </InfiniteScroll>
         
         

        </div>

     
    </section>
  )
}

export default Trending