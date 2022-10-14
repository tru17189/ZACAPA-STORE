import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main_title from './Components/Main_title';
import Horizontal_menu from './Components/Horizontal_menu';
import Estado from './Components/Estado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <Horizontal_menu 
          opcion1="NEW"
          opcion2="WOMEN"
          opcion3="MEN"
          opcion4="BABY"
          opcion5="NEW"
          opcion6="WOMEN"
          opcion7="MEN"
          opcion8="BABY"
          />
        </section>
        <section>
          <Estado></Estado>
        </section>
      </header>
    </div>
  );
}

export default App;
