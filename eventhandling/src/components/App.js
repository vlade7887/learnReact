import React, { useState } from "react";

function App() {

const [headingText, setHeadingText] = useState("Hello")

const colorBlack = "black";
const colorWhite = {backgroundColor: "white"};

const [ismouseOver, setMouseOver] = useState(false);

  function handleClick(){
    setHeadingText("Submitted");
  }
  

  function handleMouseOver(){
    setMouseOver(true);
    console.log("yes")
  }

function handleMouseOut(){
  setMouseOver(false);
}




  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor: ismouseOver ? "black" : "white"}} 
      onClick={handleClick} 
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      >Submit</button>
      
    </div>
  );
}

export default App;
