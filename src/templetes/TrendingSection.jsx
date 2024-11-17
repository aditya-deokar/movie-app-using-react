import MovieCard from './MovieCard'

const TrendingSection = ({data , func }) => {

    console.log(data)
    
  return (
    <div className='w-full px-8 py-6'>
        <div className='flex justify-between items-center pb-4 overflow-x-hidden'>
            <h1 className='text-2xl'>Trending</h1>
            <div>
                <label className='bg-slate-900 px-2 py-1 rounded-md' htmlFor="trend" >Categories:</label>
                <select onChange={func} className='bg-slate-900 border-none outline-none px-3 py-1 ml-2 rounded-md' name="trend" id="trend">
                    <option value="all">all</option>
                    <option value="movie">movie</option>
                    <option value="tv">tv</option>
                </select>
            </div>
        </div>

        <div className='flex justify-start items-start w-fit  flex-wrap gap-5'>
            

            {
                data.map((item,id)=>(
                    <MovieCard key={id} item={item}/>
                ))
            }
                
               
        </div>


    </div>
  )
}

export default TrendingSection