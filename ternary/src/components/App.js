// import Login from "./Login";

// var isLoggedIn = true;

// const currentTime = new Date(2021, 1, 1, 13).getHours();
// console.log(currentTime);

// function App(){
//   return(
//     <div className="container">
//     {
//  isLoggedIn ? <h1>Hello</h1> : <Login />
    
//     }   
//     </div>
//   )
// }

// export default App;

import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      < Form isRegister = {userIsRegistered} />
    </div>
  );
}

export default App;
