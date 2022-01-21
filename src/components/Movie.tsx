import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const Movie = ({id, coverImg, title, summary, genres }: any) => {
    return (
        <div>
            <img src={coverImg}></img>
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g: any) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>

        </div>
    );
};
Movie.prototype = {
    id : PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Movie;