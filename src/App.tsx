import React from 'react';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";

import HomeScreen from './screens/Home'
import AboutScreen from './screens/About'
import CityService from './services/CityService';

function App() {
  React.useEffect(()=>{
    CityService.GetAllCities()
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
