import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import AsideContent from '../components/AsideContent';
import AsideItems from '../components/AsideItems';
import MovieContent from '../components/MovieContent';
import MovieItems from '../components/MovieItems';
import loadingAnimation from '../assets/static/loading.gif';
import '../assets/styles/normalize.css';
import '../assets/styles/app.css';


const Home = () =>{
    const [peliculasAction, setPeliculasAction] = useState({
        loading: true,
        data: {
            movies: {}
        },
        error: null,
    });

    const [peliculasDrama, setPeliculasDrama] = useState({
        loading: true,
        data: {
            movies: {}
        },
        error: null,
    });

    const [peliculasAnimation, setPeliculasAnimation] = useState({
        loading: true,
        data: {
            movies: {}
        },
        error: null,
    })

    const [listFriends,setListFriends] = useState({
        loading: true,
        data: {},
    })

    useEffect(()=>{
        const baseAPI = 'https://yts.lt/api/v2/list_movies.json?genre=';

        function requestApiMovies(api, genero, setState){
            fetch(`${api}${genero}`)
                .then(response => response.json())
                .then(data => setState({
                    data: {
                        movies: data.data.movies
                    },
                    loading: false,
                    error: null
                }))
                .catch( err => setState(err));
        }

        requestApiMovies(baseAPI,'action',setPeliculasAction);
        requestApiMovies(baseAPI,'drama',setPeliculasDrama);
        requestApiMovies(baseAPI,'animation', setPeliculasAnimation);

    }, [])

    useEffect(() => {
        const API = 'https://uinames.com/api/?ext&amount=25';

        function requestFriend(api){
            fetch(api)
                .then(response => response.json())
                .then(data => setListFriends({
                    data: data,
                    loading: false
                }));
        }
        requestFriend(API);            
    }, [])
        
    return(
        <>
            <Aside>
                <AsideContent title="Mi Playlist Escuchar Playlist" list="true">
                    <AsideItems list="true"/>
                    <AsideItems list="true"/>
                    <AsideItems list="true"/>
                    <AsideItems list="true"/>
                    <AsideItems list="true"/>

                </AsideContent>

                {!listFriends.loading &&
                    <AsideContent title="Playlist de amigos">
                        {listFriends.data.map( item => 
                            <AsideItems
                                key={item.email}
                                {...item}
                            />
                        )}
                    </AsideContent>
                }
            </Aside>

            <Header />

            {peliculasAction.loading ?
                <MovieContent>
                    <img src={loadingAnimation} alt="loading.gif"/>
                </MovieContent>:

                <MovieContent title="Accion">
                    {peliculasAction.data.movies.map(item => 
                        <MovieItems 
                            key={item.id}
                            {...item}
                            loading={peliculasAction.loading}
                        />
                        )}
                </MovieContent>
            }


            {peliculasDrama.loading ?
                <MovieContent>
                    <img src={loadingAnimation} alt="loading.gif"/>
                </MovieContent>:
                <MovieContent title="Drama">
                    {peliculasDrama.data.movies.map( item => 
                        <MovieItems 
                            key={item.id}
                            {...item}
                            loading={peliculasDrama.loading}
                        />
                    )}
                </MovieContent>
            }

            {peliculasAnimation.loading ?
                <MovieContent>
                    <img src={loadingAnimation} alt="loading.gif"/>
                </MovieContent>:
                <MovieContent title="Animacion">
                    {peliculasAnimation.data.movies.map(item =>
                        <MovieItems 
                            key={item.id}
                            {...item}
                            loading={peliculasAnimation.loading}
                        />
                    )}
                </MovieContent>
            }
        </>
    )
}


export default Home;