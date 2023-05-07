import React, { useState} from "react";

function Form( {onAddItem}) {

    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [house, setHouse] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const itemData = {
          image: image,
          name: name,
          house: house,
        };
        fetch("http://localhost:4000/characters", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(itemData),
        })
          .then((r) => r.json())
          .then((newItem) => onAddItem(newItem));
      }

    return (
        <form className="NewCharacter" onSubmit={handleSubmit}>
            <label>
                Image:
                <input
                type="text"
                value={image}
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
                Name:
                <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setHouse(e.target.value)}
                />
            </label>
            <button type="submit">Add to List</button>
      </form>
    
    )}
export default Form
