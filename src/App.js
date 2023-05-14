import React , { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AllCharacters from "./AllCharacters";
import HogwartsHouses from "./HogwartsHouses"
import NavBar from "./NavBar"
import NewCharacterForm from "./NewCharacterForm"
import Header from "./Header";



function App() {

  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/characters")
    .then((r) => r.json())
    .then(data => setCharacters(data))
  }, [])


  const handleAddItem = (newItem) => {
    setCharacters([...characters, newItem]);
  }

  return (
    <div >
      <Header />
       <NavBar />
       <Routes>
          <Route path="/" element={<HogwartsHouses />} />
          <Route path="/characters/new" element={<NewCharacterForm onAddItem={handleAddItem} characters={characters} setCharacters={setCharacters}/>}></Route>
          <Route path="/characters" element={<AllCharacters setCharacters={setCharacters} characters={characters} />} />
     </Routes>
    </div>
  );
}

export default App;
