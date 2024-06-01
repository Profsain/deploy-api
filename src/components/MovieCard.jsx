

import PropTypes from "prop-types"
const MovieCard = ({ movie }) => {
    const {large_cover_image, title, rating, year} = movie
    console.log("movie", movie)
    const styles = {
        card: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '300px',
            height: '400px',
            border: '1px solid black',
            borderRadius: '10px',
            margin: '10px',
            padding: '10px',
            backgroundColor: 'lightgray'
        },
        img: {
            width: '100%',
            height: '70%',
            objectFit: 'cover',
            borderRadius: '10px'
        },
        title: {
            fontSize: '20px',
            margin: '5px 0'
        },
    }
  return (
    <div style={styles.card}>
      <img
        style={styles.img}
        src={
          large_cover_image ||
          "https://yts.mx/assets/images/movies/cold_eyes_of_fear_1971/large-cover.jpg"
        }
        alt="movieImg"
      />

      <div>
              <h3 style={styles.title}>{ title || ""}</h3>
        <p>{rating || 0}/10</p>
        <p>{year || "Year"}</p>
      </div>
    </div>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.any
}

export default MovieCard