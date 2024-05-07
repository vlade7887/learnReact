
// var isDone = true;

import { useState } from "react";


// function strike(){
//  isDone = true;
// }

// function unStrike(){
//  isDone = false;
// }
// const strikeThrough =  {textDecoration: "line-through"};
// function App() {
//   return (
//    <div>
//       <p style={isDone ? strikeThrough : null}> Buy milk</p>
//      <button onClick={strike}>Change to strike Through</button>
//      <button onClick={unStrike}>Back to normal</button>
//    </div>
//   );
// }

// export default App;


function App(){
const [count, setCount] = useState(0)


function increase(){
  setCount(count + 1);
}


function decrease(){
  setCount(count - 1);
}
return(
<div className="container">
  <h1>{count}</h1>
  <button onClick={increase}>+</button>
  <button onClick={decrease}>-</button>
</div>

)

}


export default App;