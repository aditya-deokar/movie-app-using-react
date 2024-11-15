import SideNav from "../templetes/SideNav";
import TopNav from "../templetes/TopNav";

const Home = () => {

    document.title="Movie App | Home Page";

  return (
    <section className="w-full h-full flex ">

        <SideNav/>
     
        <div className="w-[80%] h-screen">
            <TopNav/>
        </div>
    </section>
    
  )
}

export default Home