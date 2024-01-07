import React from 'react';
import Cardes from './../cardes/cardes';

const Portfolio = () => {
    return (
        <div className='bg-light'>
        <h1 className='p-5'>Portfolio</h1>
        <div className='row ms-5 pb-5'>
        <Cardes cardtitle="WEB DESIGN" bgcolor="bg-secondary" keycard={1}/>
        <Cardes cardtitle="MOBILE DESIGN" bgcolor="bg-dark" keycard={2}/>
        <Cardes cardtitle="LOGO DESIGN" bgcolor="bg-secondary" keycard={3}/>
        <Cardes cardtitle="WEB APPLICATION DEVELOPMENT" bgcolor="bg-dark" keycard={4}/>
        <Cardes cardtitle="MOBILE APPLICATION DEVELOPMENT" bgcolor="bg-secondary" keycard={5}/>
        <Cardes cardtitle="PWA DEVELOPMENT" bgcolor="bg-dark" keycard={6}/>
        </div>
    </div>
    );
}

export default Portfolio;
