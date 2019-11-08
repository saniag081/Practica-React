import React from 'react';
import '../assets/styles/components/Modal.css'

const Modal = props => {
    const { title, medium_cover_image, description_full, setState} = props;

    const handleClick = () => {
        setState({
            mostrar: false
        })
    }

    return(
            <div className="modal">
                <div className="modal__content">
                    <h2>{title}</h2>
                    <div className="modal__content__container">
                        <div>
                            <img src={medium_cover_image} alt={title}/>                
                        </div>
                        <div>
                            <p>{description_full}</p>
                        </div>
                    </div>
                    <button className="modal__content__btn" onClick={handleClick} >Cerrar Ventana</button>
                </div>
            </div>        
    )
}

export default Modal;