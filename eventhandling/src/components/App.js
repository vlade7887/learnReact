import React, { useState } from "react";

// function App() {

// const [headingText, setHeadingText] = useState("Hello")


// const [ismouseOver, setMouseOver] = useState(false);

//   function handleClick(){
//     setHeadingText("Submitted");
//   }
  

//   function handleMouseOver(){
//     setMouseOver(true);
//     console.log("yes")
//   }

// function handleMouseOut(){
//   setMouseOver(false);
// }




//   return (
//     <div className="container">
//       <h1>{headingText}</h1>
//       <input type="text" placeholder="What's your name?" />
//       <button style={{backgroundColor: ismouseOver ? "black" : "white"}} 
//       onClick={handleClick} 
//       onMouseOver={handleMouseOver}
//       onMouseOut={handleMouseOut}
//       >Submit</button>
      
//     </div>
//   );
// }
function App(){


const [name, setName] = useState("");
const [onMouseOver, setOnMouseOver] = useState(false)
const [headingText, setHeadingText] = useState("")

  function handleChange(event){
  setName(event.target.value);
  console.log(event.target.value)
}



 function handleClick(event){
   setHeadingText(name)
   event.preventDefault();
 }




// style on submit button
function handleBlack(){
  setOnMouseOver(true)
}

function handleWhite(){
  setOnMouseOver(false)
}

  return (
      <div className="container">
        <h1>Hello {headingText}</h1>
        <form onSubmit={handleClick}>
        <input 
         onChange={handleChange} 
         type="text" 
         placeholder="What's your name?"
          
         />
      <button 
        onMouseOver={handleBlack} 
        onMouseOut={handleWhite}
        style={{backgroundColor: onMouseOver ? "black" : "white"}}
        type="submit">Submit</button>
       </form>
      </div>
  )
}


export default App;

