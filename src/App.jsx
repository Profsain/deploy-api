import {useState, useEffect} from 'react'
import MovieCard from './components/MovieCard'

function App() {
  const [movies, setMovies] = useState([])
  // handle fetch
  const fetchMovies = async () => {
    const url = "https://list-movies.p.rapidapi.com/list_movies.json";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d3d34dd43bmshf12eb58e1051496p17b2f3jsn728c67911849",
        "X-RapidAPI-Host": "list-movies.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setMovies(result.data.movies);
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      padding: '20px'
    }
  }

  // if movies is empty
  if (movies.length === 0) {
    return <h1>Loading...</h1>
  }
  
  return (
    <>
      <div style={styles.container}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
     </div>
    </>
  )
}

export default App
