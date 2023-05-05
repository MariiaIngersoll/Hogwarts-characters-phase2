import React from "react";
import { Route, Routes } from "react-router-dom";
import AllCharacters from "./AllCharacters";
import HogwartsHouses from "./HogwartsHouses"
import NavBar from "./NavBar"
import CharacterCard from "./CharacterCard"
import Search from "./Search"


function App() {

  return (
    <div>
      
     <Routes>
      <Route exact path="/" element={<NavBar />} />
      <Route path="/houses" element={<HogwartsHouses />} />
      <Route path="/characters" element={<AllCharacters />} />
      
     </Routes>
    </div>
  );
}

export default App;
