import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../src/components/Footer';
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import '../src/styles/styles.scss';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
