import React, { useState } from "react";

export function TodoForm(item) {
  //start by setting up the state for the form. (we do not need to use a reducer because we are only manipulating 1 state.)
  const [form, setForm] = useState("");

  // return the form. With an onsubmit button.

  // we are using my addNew function to add new items to the list + setting the input box to empty after. -
  //you can find that function in the reducer file

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        item.addNew(form);
        setForm("");
      }}
    >
      <label htmlFor="todos" aria-label="To-do'"></label>
      <input
        placeholder="Type to-dos' here!"
        type="text"
        name="name"
        value={form}
        onChange={(event) => {
          setForm(event.target.value);
        }}
      ></input>
      <button type="submit ">Add Todo</button>
    </form>
  );
}
//setting up input.

// using my onChange to update the state.

// and we have a button to submit.

// nice! Now lets add everything to the page!! Go to app.js
