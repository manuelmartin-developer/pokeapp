import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Main from '../src/components/Main';

import '../src/styles/styles.scss';
import './App.css';

import { pokeContext } from './context/pokeContext';


function App() {

  const [pokemons, setPokemon] = useState([]);

  const utils = {
    pokemons: pokemons,
    setPokemon: setPokemon
  }

  return (
    <div className="App">
      <BrowserRouter>
      <pokeContext.Provider value={utils}>
        <Header />
        <Main />
      </pokeContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
