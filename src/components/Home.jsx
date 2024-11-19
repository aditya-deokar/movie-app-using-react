import axios from "../utils/axios";
import Hero from "../templetes/Hero";
import SideNav from "../templetes/SideNav";
import TopNav from "../templetes/TopNav";
import { useEffect, useState } from "react";
import TrendingSection from "../templetes/TrendingSection";
import Loading from "./Loading";
import DropdownMenu from "../templetes/DropdownMenu";

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
            <TopNav profile />
             <Hero data={Wallpaper} />

             <div className='flex justify-between items-center px-8 py-5 overflow-x-hidden'>
              <h1 className='text-2xl'>Trending</h1>
               <DropdownMenu func={(e)=>setCategory(e.target.value)} name={"category"} options={ ["all" ,"movie" , "tv"]} />
            </div>

             <TrendingSection data={ TrendingMovie }  />
            
           
        </div>
    </section>
    
  ) : (
    <Loading />
  )
}

export default Home