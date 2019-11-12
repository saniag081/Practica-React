import React, { useState } from 'react';
import '../assets/styles/components/Header.css';
import userIcon from '../assets/static/logo.svg';
import SearchCom from './Search';


const Header = () => {
    const [search, setSearch] = useState({
        name: '',
        response: {
            data: {
                data:{
                    movie_count: 0,
                    movies: []
                }
            }
        },
        searching: false,
        notFound: ''
    })

    const handleChange = e =>{
        setSearch({
            [e.target.name]: e.target.value,
        });
    }

    // console.log(search.response);

    const handleSubmit = e => {
        e.preventDefault()

        const API = 'https://yts.lt/api/v2/list_movies.json?limit=1&query_term=$';

        function searchMovie(api,movie){

            fetch(`${api}${movie}`)
                .then(response => response.json())
                .then(data => setSearch({
                    response: {
                        data: data
                    },
                    searching: true
                }))
                .catch( err => setSearch({
                    notFound: err
                }))
        }

        searchMovie(API,search.search);
        console.log(search.response);

    }

    if(search.searching){
        (function notFound(){
            if(search.response.data.data.movie_count == 0){
                alert('No se encontro pelicula');
            }
        })();
    }


    return(
        <>
            <header className="header">
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="header__search"
                        name="search"
                        placeholder="Buscar un artista o tema favorito"
                        onChange={handleChange}
                        value={search.name}
                    />
                </form>
                <div className="header__container">
                    <figure className="header__container__image">
                        <img src={userIcon} alt="" width="100" className=""/>
                    </figure>
                    <p className="header__container__user">Santiago Gonzalez</p>
                </div>
            </header>
            {search.searching &&
                <>
                    {search.response.data.data.movie_count > 0 &&
                        <SearchCom
                            {...search}
                        />
                    }
                </>
            }
        </>
    )
}

export default Header;