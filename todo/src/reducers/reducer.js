//okay sis so you want to start here!

// 1dt build out itintal state!

export const initialState = [
  {
    name: "",
    done: false,
    id: new Date(),
  },
];

//build out that actions in the state

//think about all of the states that will be changing. + the function that each state will update.

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_THING":
      return [...state, action.payload];

    //here we are adding the new thing.

    case "COMPLETED":
      return state.map((item) => {
        return item.id === action.payload
          ? { ...item, done: !item.done }
          : item;
      });

    // Here we builing the function for the toggled aspect

    case "ClEAR":
      return state.filter((item) => !item.done);

    //this is how we clear!

    default:
      return state;

    //this is just customary! Don't forget it!!!

    //you got this!

    // next move builing your todo!
  }
}
