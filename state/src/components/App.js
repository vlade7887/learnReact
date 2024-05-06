
// var isDone = true;


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


function App() {
 const state = React.useState();

  function increase(){
    
    count++;
    
  } 
  

  return (
   <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      
    
   </div>
  );
}

export default App;
