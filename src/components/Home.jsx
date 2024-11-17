import axios from "../utils/axios";
import Hero from "../templetes/Hero";
import SideNav from "../templetes/SideNav";
import TopNav from "../templetes/TopNav";
import { useEffect, useState } from "react";
import TrendingSection from "../templetes/TrendingSection";

const Home = () => {
      document.title="Movie App | Home Page";

      const [TrendingMovie, setTrendingMovie] = useState([]);
      const [Wallpaper, setWallpaper] = useState([]);
      let [ Category, setCategory] =useState('all')

      console.log(Category)


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
      }, [])
      


  return setWallpaper || setTrendingMovie ?(
    <section className="w-full h-full flex ">

        <SideNav/>
     
        <div className="w-[80%] h-screen overflow-x-hidden">
            <TopNav/>
             <Hero data={Wallpaper} />
             <TrendingSection data={ TrendingMovie } func={(e)=>setCategory=e.target.value} />
            
           
        </div>
    </section>
    
  ):(
    <h1>Loading..</h1>
  )
}

export default Home