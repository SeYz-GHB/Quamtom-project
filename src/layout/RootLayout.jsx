import React from 'react';
import { Outlet } from 'react-router-dom';
import BackgroundImage from '../components/BackgroundImage';
import Footer from '../components/Footer';
import Header from '../components/Header';

const RootLayout = () => {
  return (
    <div className="relative flex flex-col min-h-screen items-center">
      <Header />
     
     

      
      <div className="flex flex-col justify-center items-center w-full relative flex-grow">
        <Outlet />
      </div>
      
    </div>
  );
}

export default RootLayout;

