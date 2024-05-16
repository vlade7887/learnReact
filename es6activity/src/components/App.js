import React, { useState } from "react";

function App() {

const [inputText, setInputText] = useState("");
const [items, setItems] = useState([]);
function handleChange(event){
  const newValue = event.target.value;
  setInputText(newValue);
}

function addList(){
  setItems((prevItem) =>{
    return [... prevItem, inputText]
  })
  setInputText("");
}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
         { items.map((todoList) =>{
            return <li>{todoList} </li>
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
