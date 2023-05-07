import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import ChangeForm from "./ChangeForm";


function AllCharacters( { characters }) {

    const [filterBy, setFilterBy] = useState("none");
    const filteredCharacters = characters.filter((char) => char.house === filterBy)
    console.log(filteredCharacters)

    const listOfCharacters = filteredCharacters.map((character) => {
       return <CharacterCard key={character.id} character={character} />
    })
    return (
        <main>
            <ChangeForm filterCharacter={filteredCharacters} setFilterBy={setFilterBy} filterBy={filterBy} characters={filteredCharacters}/>
            <ul className="listCharacters">
                {listOfCharacters}
            </ul>
        </main>
    )


}

export default AllCharacters
