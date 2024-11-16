import axios from "axios";
const instance =axios.create(
    {
        baseURL:'https://api.themoviedb.org/3/',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjE3NGIwODU2ZWQ3YmY4NzU1ZjI2MWNmMGE5N2JjNyIsIm5iZiI6MTczMTc3NjkzOS45NzE3NzUsInN1YiI6IjY3MzhjZWY4YmJiNDlmMDZhMDBkNzNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jjWb4qSl7T2uKbTwREcum5hbAkCzrMYmGhT4iCXRqkc'
          },
    }
)

export default instance;