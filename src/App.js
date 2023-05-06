import React , { setState, useEffect, useState } from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import AllCharacters from "./AllCharacters";
import HogwartsHouses from "./HogwartsHouses"
import NavBar from "./NavBar"
import CharacterCard from "./CharacterCard"
import Search from "./Search"


function App() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/characters")
    .then((r) => r.json())
    .then(data => setCharacters(data))
  })

  return (
    <div >
      <header className="header">
        <h1>Welcome to The Hogwarts World</h1>
      </header>
       <NavBar />
       <Routes>
      <Route path="/" element={<HogwartsHouses />} />
      <Route path="/characters" element={<AllCharacters />} />
      
     </Routes>
    </div>
  );
}

export default App;
