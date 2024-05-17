import React from "react";


function TodoItem(props){
  

  function handleClick(){
   
  }


  return(
    <div onClick={handleClick}>    
      <li>{props.text}</li>
    </div>

  )
}

export default TodoItem;