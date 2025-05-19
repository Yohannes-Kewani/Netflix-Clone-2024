import React, { useState, useEffect } from 'react';
import axios from '../../Utilities/axios' // Make sure your axios instance is properly configured
import requests from '../../Utilities/request'; // Import API endpoint list
import './Banner.css'; // Optional: for styling
import truncate from './Truncate'; // Helper function to shorten text

const Banner = () => {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        const randomIndex = Math.floor(Math.random() * request.data.results.length);
        setMovie(request.data.results[randomIndex]);
      } catch (error) {
        console.log("error", error);
      }
    }

    fetchData();
  }, []);

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
