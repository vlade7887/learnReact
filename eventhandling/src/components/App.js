import React, { useState } from "react";

function App() {

const [headingText, setHeadingText] = useState("Hello")

const colorBlack = "black";
const colorWhite = {backgroundColor: "white"};

const [black, setBlack] = useState("white");

  function handleClick(){
    setHeadingText("Submitted");
  }
  

  function handleBlack(){
    setBlack("black")
  }

  function handleWhite(){
    setBlack("white")
  }




  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: black}} onClick={handleClick} onMouseOver={handleBlack} onMouseOut={handleWhite}>Submit</button>
    </div>
  );
}

export default App;
