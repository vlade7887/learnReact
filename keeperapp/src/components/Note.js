import React from "react";

function Note( props) {
  console.log(props)
  return (
    <div className="note">
      <span>{props.num}.</span>
      <span>{props.title}</span>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
