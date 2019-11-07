import React from 'react';
import '../assets/styles/components/Aside.css'
import logoPlatzi from '../assets/static/platzi-video.png';

const Aside = ({ children }) => {
    return(
        <aside className="aside">
            <img src={logoPlatzi} alt=""/>
            <button>Reset Query</button>
            { children }
        </aside>
    )
}

export default Aside;