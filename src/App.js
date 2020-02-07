import React from 'react';
import Card from './Components/Card/Card';
import NavBar from './Components/NavBar/NavBar';
import MyMap from './Components/Map/Map';

import './App.css';

function App() {
  return (
    <div>
      <NavBar />
      <Card />
      <MyMap />
    </div>
  );
}

export default App;
