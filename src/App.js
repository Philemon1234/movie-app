import axios from 'axios'
import {React, useEffect } from 'react'

function App() {

  const API_URL = "https://api.themoviedb.org/3"

  const fetchMovies = async () => {
    const data = await axios.get(`${API_URL}/discover/movie`, {
      params:{
        api_key: process.env.REACT_APP_MOVIE_API_KEY
      }
    })

    console.log("data", data)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div>Hello world</div>
  )
}

export default App