import React, { useState } from 'react';
import './App.css';

import './components/Intervalo'
import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Soma from './components/Soma';
import Sorteio from './components/Sorteio';

function App() {

   return (
    <div className="App">
      <h1>Exercício React-Redux-(simples)</h1>
      <div className="Linha">
        <Intervalo></Intervalo>
      </div>
      <div className="Linha">
        <Media></Media>
        <Soma ></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
