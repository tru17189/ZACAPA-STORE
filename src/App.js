import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente from './Components/Componente';
import Propiedades from './Components/Propiedades';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <Componente msg="ZACAPA STORE"/>
          <Propiedades 
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
      </header>
    </div>
  );
}

export default App;
