import React, { useEffect, useState } from 'react'
import Logo from '../templetes/Logo'
import TopNav from '../templetes/TopNav'
import DropdownMenu from '../templetes/DropdownMenu'
import axios from '../utils/axios'
import MovieCard from '../templetes/MovieCard'

const Trending = () => {

  const [Category ,setCategory]=useState("all");
  const [Duration, setDuration] = useState("day");
  const [moviedata, setMoviedata] = useState([]);

  // console.log(moviedata)

  

  async function GetTrendingMovies(){
    try{
      const  {data} = await axios.get(`https://api.themoviedb.org/3/trending/${Category}/${Duration}`);
      setMoviedata(data.results);
      

      }catch(error){
        console.log("error",error);
      }

  }

  useEffect(() => {
    GetTrendingMovies();
   
  }, [Category,Duration])
  






  return (
    <section className='w-full h-screen overflow-y-scroll flex flex-col'>
      
        <div className='w-full h-fit flex '>
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

        <div className='w-full py-10'>

          <div className='flex justify-center items-start w-fit  flex-wrap gap-5'>
          {
            moviedata.map((item,id)=><MovieCard key={id} item={item}/>)
          }
          </div>

        </div>

     
    </section>
  )
}

export default Trending