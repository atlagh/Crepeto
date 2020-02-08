import React from 'react';
import Card from './Components/Card/Card';
import NavBar from './Components/NavBar/NavBar';
import MyMap from './Components/Map/Map';
import Menu from './Components/Menu/Menu';
import Register from './Components/Register/Register';
import './App.css';


function App() {
  return (
    <div>
      <NavBar />
      <div className="unit">
      	  <Menu />
	      <Card />
	      <Register />
	  </div>
    </div>
  );
}

export default App;
