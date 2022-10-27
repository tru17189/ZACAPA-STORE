import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import './css/Burger_menu.css';
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Analytics from './Components/Analytics'
import About from './Components/About'
import Another from './Components/Another';

function App() {
  return (
    <header className="App-header">
      <section>
        <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/sidebar" element={<Sidebar />}/>
              <Route path="/dashboard" element={<Dashboard />}/>
              <Route path="/analytics" element={<Analytics />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/another" element={<Another />}/>
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </section>
    </header>
  );
}

export default App;
