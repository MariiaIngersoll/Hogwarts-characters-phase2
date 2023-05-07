import React, { useState } from "react";


function CharacterCard( { character, onDeleteItem }) {
    const [favButton, setFavButton] = useState(false)

    const favoriteButton = () => {
        setFavButton(!favButton)
    }

    function handleDeleteClick() {
        fetch(`http://localhost:4000/characters/${character.id}`, {
            method: "DELETE",
          })
            .then((r) => r.json())
            .then(() => onDeleteItem(character));
        }
    

    return (
        <li className="card">
            <div className="image">
                <img src={character.image}/>
                <h2>{character.name}</h2>
                <h3>{character.house}</h3>

            </div>
            <div className="details">
            {favButton ? (
                <button onClick={favoriteButton} >❤</button>
                ) : (
                <button onClick={favoriteButton} >♡</button>
                )}
            <button  onClick={handleDeleteClick}>Delete</button>
            </div>
        </li>
    )
                }
export default CharacterCard