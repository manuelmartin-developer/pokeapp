import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Main from '../src/components/Main';

import '../src/styles/styles.scss';
import './App.css';

import { pokeContext } from './context/pokeContext';
import { QueryParamProvider } from 'use-query-params';


function App() {

  const [pokemons, setPokemon] = useState([]);

  const utils = {
    pokemons: pokemons,
    setPokemon: setPokemon
  }

  return (
      <BrowserRouter>
      <pokeContext.Provider value={utils}>
        <Header />
      <QueryParamProvider ReactRouterRoute={Route}>
        <Main />
      </QueryParamProvider>
        <Footer />
      </pokeContext.Provider>
      </BrowserRouter>
  );
}

export default App;
