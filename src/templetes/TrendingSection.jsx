import MovieCard from './MovieCard'

const TrendingSection = ({ data }) => {

    // console.log(data)
    
  return (
    <div className='w-full px-8 py-6'>
       

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