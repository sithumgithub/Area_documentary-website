import React from 'react';
import './App.css';
import Hero from './Components/Hero/Hero';
import Header from './Components/Header/Header';
import Places from './Components/Places/Places';
import ImageGride from './Components/Places/ImageGride';
import ImageGride2 from './Components/Places/ImageGride2';
import Footer from './Components/Footer/Footer';
import HotelTitle from './Components/Hotels/HotelTitle';
import Hotels from './Components/Hotels/Hotels';

function App(){
    return(
        <>

        <div className='body'>
        <Hero/>
        <Places/>
        <ImageGride/>
        <ImageGride2/>
        <HotelTitle/>
        <Hotels/>
        <Footer/>
        </div>
        </>
    )
}
export default App