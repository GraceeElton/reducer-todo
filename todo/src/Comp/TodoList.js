import React from "react";
import Todo from "./Todos";

export function TodoList(props) {
  return (
    <div className="shopping-list">
      {props.state.map((item) => {
        return (
          <Todo
            item={item}
            key={item.id}
            handleComplete={props.handleComplete}
          />
        );
      })}
    </div>
  );
}

// receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.

// next move on to the form.

/// hmm might need a breather.
