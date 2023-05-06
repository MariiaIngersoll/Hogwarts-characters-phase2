import React from "react";
import CharacterCard from "./CharacterCard"

function AllCharacters( { characters }) {
    console.log(characters)
    const listOfCharacters = characters.map((character) => {
       return <CharacterCard key={character.id} character={character} />
    })
    return (
        <main>
            <ul className="listCharacters">
                {listOfCharacters}
            </ul>
        </main>
    )


}

export default AllCharacters
