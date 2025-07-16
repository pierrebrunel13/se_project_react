import { useState } from 'react';

import './App.css';
import Header from '../Header/Header';
import Main from "../Main/Main";

function App() {
  const [weatherData, setWeatherData]
  = useState({type: "hot"});

  return (
    <div className='page'>
      <div className='page__content'>
        <Header/></div>
        <Main weatherData={weatherData}/>
        <footer/>
    </div>
  )
}

export default App;
