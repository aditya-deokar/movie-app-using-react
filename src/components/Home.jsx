import axios from "../utils/axios";
import Hero from "../templetes/Hero";
import SideNav from "../templetes/SideNav";
import TopNav from "../templetes/TopNav";
import { useEffect, useState } from "react";

const Home = () => {
      document.title="Movie App | Home Page";

      const [TrendingMovie, setTrendingMovie] = useState([]);


      async function GetTrendingMovie(){
        try{
          const { data } = await axios.get("https://api.themoviedb.org/3/trending/all/day");
          console.log(data);

          setTrendingMovie(data.results[Math.floor(Math.random()*20)])

    
          }catch(error){
            console.log("error",error);
          }
    
      }
      
      useEffect(() => {
         GetTrendingMovie();
      }, [])
      


  return (
    <section className="w-full h-full flex ">

        <SideNav/>
     
        <div className="w-[80%] h-screen">
            <TopNav/>
             <Hero data={TrendingMovie} />
            
           
        </div>
    </section>
    
  )
}

export default Home