import React from "react";

const Todo = (props) => {
  console.log(Todo);
  return (
    <div
      className={`item${props.item.done ? " done" : ""}`}
      onClick={() => props.handleComplete(props.item.id)}
    >
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;

//this is pretty much the same as your last todo project.

// this makes it so that tasks show on the screen and that you an click it.

//the function for handleComplete is on reducer file.

//next move to ---- Todo List!!

//keep going!
