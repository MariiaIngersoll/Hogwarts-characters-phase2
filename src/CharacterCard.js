import React from "react";

function CharacterCard( { character }) {
    return (
        <li className="card">
            <div className="image">
                <img src={character.image}/>
                <h2>{character.name}</h2>
                <h3>{character.house}</h3>

            </div>
        </li>
    )
}

export default CharacterCard