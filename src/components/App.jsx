import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './MainMenu/MainMenu.jsx';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainMenu />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
