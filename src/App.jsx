import axios from "axios"
import { useEffect } from "react"

function App() {

  const API_URL = "https://api.themoviedb.org/3"

  const fetchMovies = async () => {
    const data = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: import.meta.env.REACT_APP_MOVIE_API_KEY
      }
    })
    console.log('data', data);
  }

    useEffect(() => {
      fetchMovies();
    }, [])

    return (
      <div>App</div>
    )
  }

  export default App;