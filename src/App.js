import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import './css/Burger_menu.css';
import Sidebar from './Components/Sidebar'
import NuevosIngresos from './Components/NuevosIngresos'
import Hombres from './Components/Hombres'
import Mujeres from './Components/Mujeres'
import GiftCards from './Components/GiftCards';

function App() {
  return (
    <header className="App-header">
      <section>
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/sidebar" element={<Sidebar />}/>
              <Route path="/nuevosingresos" element={<NuevosIngresos />}/>
              <Route path="/hombres" element={<Hombres />}/>
              <Route path="/mujeres" element={<Mujeres />}/>
              <Route path="/giftcards" element={<GiftCards />}/>
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </section>
    </header>
  );
}

export default App;
