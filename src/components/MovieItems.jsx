import React from 'react';
import logoEjem from '../assets/static/logo.svg';

const MovieItems = props => {
    const { id, title, medium_cover_image} = props;
    return(
        <div>
            <img src={medium_cover_image} alt={title} width="100"/>
            <h4>{title}</h4>
        </div>
    )
}

export default MovieItems;