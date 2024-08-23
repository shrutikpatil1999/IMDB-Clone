import React, { useEffect, useState } from "react";
import "./home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import Movielist from "../../components/Movielist/Movielist";

const Home = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
            .then(res => res.json())
            .then(data => setPopularMovies(data.results));
    }, []); // Added an empty dependency array to ensure the effect runs only once on mount

    return (
        <>
            <div>
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={500}
                    infiniteLoop={true}
                    showStatus={true}
                    interval={3600}
                >
                    {popularMovies.map(movie => (
                        <Link 
                            key={movie.id}  // Added a unique key prop here
                            style={{ textDecoration: "none", color: "white" }} 
                            to={`/movie/${movie.id}`}
                        >
                            <div className='posterImage'>
                                <img 
                                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                                    alt={movie.original_title}  // Added alt attribute for better accessibility
                                />
                            </div>
                            <div className='posterImage_overlay'>
                                <div className="posterImage__title">
                                    {movie.original_title}
                                </div>
                                <div className="posterImage__runtime">
                                    {movie.release_date}
                                    <span className="posterImage__rating">
                                        {movie.vote_average}
                                        <i className="fas fa-star" />
                                    </span>
                                </div>
                                <div className="posterImage__description">
                                    {movie.overview}
                                </div>
                            </div>
                        </Link>
                    ))}
                </Carousel>
                <Movielist />
            </div>
        </>
    );
};

export default Home;
