import { monitorEventLoopDelay } from 'perf_hooks';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';

const MovieApp = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async() => {
        const response = await 
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=10&sort_by=year")
        const json = await response.json();
        if(movies.length<10){
            setMovies(json.data.movies)
        }
            
        setLoading(false)
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading? <h1>Loading...</h1> : movies.map((movie) => 
            <div>
                {movies.map((movie) => 
                <Movie 
                    key={movie.id}
                    id={movie.id}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={movie.summary}
                    genres={movie.genres} 
                />)}
            </div>)}
        </div>
    );
};

export default MovieApp;