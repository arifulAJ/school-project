import React from 'react';
import Cart from './Chield/Cart';
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
          <h3 >We are provide best service for the student </h3>
          <p>Our educational activities showed below</p>
           <Cart></Cart>
        </div>
    );
};

export default Home;