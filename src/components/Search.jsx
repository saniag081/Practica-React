import React from 'react';
import '../assets/styles/components/Search.css'

const Search = props => {
    const { response } = props;
    // console.log(response.data.data.movies);
    return(
        <div className="search">
            <img src={response.data.data.movies[0].medium_cover_image} alt={response.data.data.movies[0].title}/>
            <div>
                <p>Pelicula Encontrada</p>
                <h3>{response.data.data.movies[0].title}</h3>
            </div>
        </div>
    )
}

export default Search;