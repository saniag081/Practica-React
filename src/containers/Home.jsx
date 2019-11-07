import React from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import AsideContent from '../components/AsideContent';
import AsideItems from '../components/AsideItems';
import MovieContent from '../components/MovieContent';
import MovieItems from '../components/MovieItems';
import '../assets/styles/normalize.css';
import '../assets/styles/app.css';

const Home = () =>{
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

                <AsideContent title="Playlist de amigos">
                    <AsideItems/>
                    <AsideItems/>
                    <AsideItems/>
                    <AsideItems/>
                    <AsideItems/>
                    <AsideItems/>
                </AsideContent>
            </Aside>

            <Header />

            <MovieContent title="Accion">
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
            </MovieContent>

            <MovieContent title="Drama">
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
            </MovieContent>

            <MovieContent title="Animacion">
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
                <MovieItems />
            </MovieContent>

        </>
    )
}


export default Home;