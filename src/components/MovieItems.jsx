import React, {useState} from 'react';
import '../assets/styles/components/MovieItems.css';
import Modal from './Modal';

const MovieItems = props => {
    const { id, title, medium_cover_image} = props;
    const [clickModal, setClickModal] = useState({
        mostrar: false
    });

    const handleClick = e => {
        setClickModal({
            mostrar: true
        })
    }
    
    return(
        <>
            <div className="content__list__box__items" onClick={handleClick}>
                <img src={medium_cover_image} alt={title}/>
                <h4>{title}</h4>
            </div>
            {clickModal.mostrar &&
                <Modal 
                    key={id}
                    {...props}
                    setState={setClickModal}
                />
            }
        </>
    )
}

export default MovieItems;