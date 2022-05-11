import React from 'react';
import './App.css';
import Header from './features/header/Header';
import Tours from './features/tours/Tours';

function App() {
  return (
    <>
      <Header className="header" />
      <section>
        <Tours />
      </section>
    </>
  );
}

export default App;
