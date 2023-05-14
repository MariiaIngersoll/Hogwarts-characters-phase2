import React from "react";

function SelectMenu({  filterBy, onChange}) {

return (
      <div id="selectMenu">
      <select value={filterBy} onChange={(e) =>onChange(e.target.value)}>
          <option value="">Choose a Hogwarts House</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
      </select>
        </div>
      
    )
}
export default SelectMenu;