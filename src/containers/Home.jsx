import React from 'react';
import Header from '../components/Header';
import Aside from '../components/Aside';
import AsideContent from '../components/AsideContent';
import AsideItems from '../components/AsideItems';
import '../assets/styles/normalize.css';
import '../assets/styles/app.css';

const Home = () =>{
    return(
        <>
            <Aside>
                <AsideContent title="Mi Playlist Escuchar Playlist" list="true">
                    <AsideItems list="true"/>
                </AsideContent>

                <AsideContent title="Playlist de amigos">
                    <AsideItems/>
                </AsideContent>
            </Aside>

            <Header />
        </>
    )
}


export default Home;