import axios from "axios"
import { useEffect, useState } from "react"
import MovieCard from "./Components/MovieCard"
import './App.css'

function App() {

  const API_URL = "https://api.themoviedb.org/3"
  const [movies, setMovies] = useState([])

  const fetchMovies = async () => {
    const {data: {results}} = await axios.get(`${API_URL}/discover/movie`, {
      params: {
        api_key: import.meta.env.VITE_MOVIE_API_KEY
      }
    })

   setMovies(results)
  }
  
    useEffect(() => {
      fetchMovies();
    }, [])


    const renderMovies = () => (
      movies.map(movie => (
        <MovieCard
        key={movie.id}
        movie={movie}
        />
      ))
    )

    return (
      <div className="App">
        <div className="Container">
          {renderMovies()}
        </div>
      </div>
    )
  }

  export default App