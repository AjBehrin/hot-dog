import React from 'react';
import './App.less';
import HomePageComponent from '../home/HomePageComponent'
import NavbarComponent from '../nav/navbarComponent';

function App() {
  return (
    <>
      <NavbarComponent />
      <HomePageComponent />
    </>
  );
}

export default App;
