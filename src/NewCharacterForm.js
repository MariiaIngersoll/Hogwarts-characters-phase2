import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

function NewCharacterForm( {onAddItem}) {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [house, setHouse] = useState("");

    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const characterData = {
          image: image,
          name: name,
          house: house,
        };
        fetch("http://localhost:4000/characters", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(characterData),
        })
          .then((r) => r.json())
          .then((newItem) => onAddItem(newItem));
          navigate('/characters')
      }

    return (
        <form className="NewCharacter" onSubmit={handleSubmit}>
          <label>
              Image:
              <input
              name="image"
              src={image}
              onChange={(e) => setImage(e.target.value)}
              />
          </label>
          <label>
              Name:
              <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              />
          </label>
          <label>
              House:
              <input
              type="text"
              name="name"
              value={house}
              onChange={(e) => setHouse(e.target.value)}
              />
          </label>
          <button className="submitBtn" type="submit">Add to List</button>
      </form>
    
    )}
export default NewCharacterForm
