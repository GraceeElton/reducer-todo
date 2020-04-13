import React, { useReducer } from "react";
import { TodoList } from "../src/Comp/TodoList";
import { TodoForm } from "../src/Comp/TodoForm";
import { initialState, reducer } from "./reducers/reducer";
import "../src/Comp/Todo.css";

// import everything you need!

function App() {
  //declare state for the reducaer function. Use the paramater for the reducer function.

  // with useState. call the the reducer hook with the reducer function and add the initial state.
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  //here is when we are declaring the actions with the dispatch so they what they are updating.

  const addNew = (input) => {
    const newTodo = {
      name: input,
      done: false,
      id: new Date(),
    };
    dispatch({ type: "ADD_THING", payload: newTodo });
  };

  const handleComplete = (clickedid) => {
    dispatch({ type: "COMPLETED", payload: clickedid });
  };

  const clearCompleted = () => {
    dispatch({ type: "ClEAR" });
  };

  ///below is where we are calling all of the functions with their compontents to make eveything work! YAY

  return (
    <div className="holder">
      <div className="App">
        <header>
          <h1>My to do list using reducers!</h1>
        </header>
        <TodoForm addNew={addNew} />
        <TodoList state={state} handleComplete={handleComplete} />
        <button
          className="clear-btn"
          onClick={(event) => {
            event.preventDefault();
            clearCompleted();
          }}
        >
          Clear Completed!
        </button>
      </div>
    </div>
  );
}

export default App;

//yay sis! It works!
