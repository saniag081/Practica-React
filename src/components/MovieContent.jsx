import React from 'react';
import '../assets/styles/components/MovieContent.css';

const MovieContent = props => {
    const { title, children } = props;

    return(
        <div className="content__list">
            <h3>{title}</h3>
            <div className="content__list__box">
                {children}
            </div>
        </div>
    )
}

export default MovieContent;