import axios from "../utils/axios";
import Hero from "../templetes/Hero";
import SideNav from "../templetes/SideNav";
import TopNav from "../templetes/TopNav";
import { useEffect, useState } from "react";
import TrendingSection from "../templetes/TrendingSection";
import Loading from "./Loading";

const Home = () => {
      document.title="Movie App | Home Page";

      const [TrendingMovie, setTrendingMovie] = useState([]);
      const [Wallpaper, setWallpaper] = useState([]);
      const [Category, setCategory] = useState('all')

      // console.log(Category)


      async function GetTrendingMovie(){
        try{
          const { data } = await axios.get(`https://api.themoviedb.org/3/trending/${Category}/day`);
          // console.log(data);

          setWallpaper(data.results[Math.floor(Math.random()*20)]);

          setTrendingMovie(data.results);

    
          }catch(error){
            console.log("error",error);
          }
    
      }
      
      useEffect(() => {
         GetTrendingMovie();
       
      }, [Category])
      


  return setWallpaper || setTrendingMovie ? (
    <section className="w-full h-full flex ">

        <SideNav/>
     
        <div className="w-[80%] h-screen overflow-x-hidden">
            <TopNav/>
             <Hero data={Wallpaper} />

             <div className='flex justify-between items-center px-8 py-5 overflow-x-hidden'>
              <h1 className='text-2xl'>Trending</h1>
                <div>
                    <label className='bg-slate-900 px-2 py-1 rounded-md' htmlFor="trend" >Categories:</label>
                    <select onChange={(e)=>setCategory(e.target.value)}  className='bg-slate-900 border-none outline-none px-3 py-1 ml-2 rounded-md' name="trend" id="trend">
                        <option value="all">all</option>
                        <option value="movie">movie</option>
                        <option value="tv">tv</option>
                    </select>
                </div>
            </div>

             <TrendingSection data={ TrendingMovie }  />
            
           
        </div>
    </section>
    
  ) : (
    <Loading />
  )
}

export default Home