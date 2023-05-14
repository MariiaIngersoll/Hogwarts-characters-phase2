import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import ChangeForm from "./ChangeForm";


function AllCharacters( {characters, setCharacters }) {
   
    const [filterBy, setFilterBy] = useState("");

    const  handleFilterChange = (newChar) => {
        setFilterBy(newChar);
      }
    

    const handleDeleteItem = (deletedItem) => {
        const updatedItems = characters.filter((item) => item.id !== deletedItem.id);
        setCharacters(updatedItems);
      }

    const filteredCharacters = characters.filter((char) => char.house.includes(filterBy))
    
   
    const listOfCharacters = filteredCharacters.map((character) => {
       return <CharacterCard onDeleteItem={handleDeleteItem} key={character.id} character={character} />
    })
    return (
        <main>
            <ChangeForm onChange={handleFilterChange} filterBy={filterBy} characters={filteredCharacters}/>
            <ul className="listCharacters">
                {listOfCharacters}
            </ul>
        </main>
    )


}

export default AllCharacters
