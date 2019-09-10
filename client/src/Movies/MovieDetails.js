import React from 'react'
import MovieCard from './MovieCard'

export default function MovieDetails(props){
    const { title, director, metascore, stars } = props;
    return (
        <MovieCard title={title} director={director} metascore={metascore} stars={stars} />
     
    );
}