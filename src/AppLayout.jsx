import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import { LangProvider } from './contexts/language';

const AppLayout = () => {

    return (

            <>
              <Header />
            <Outlet/>
            <Footer />
            </>
           
   
    );
}

export default AppLayout;
