import React from 'react';
import '../assets/styles/components/AsideItems.css';

const AsideItems = props => {
    const { list, name, photo, email } = props
    return(
        <>
            {list ?
                <li>programing</li>:
                <div className="aside__friend__item">
                    <img src={photo} alt={name} width="50"/>
                    <p>{name}</p>
                </div>
            }
        </>
    )
}

export default AsideItems;