// Reducers receive information from Actions in the form of "Type" and "Payload".
// And they perform a task or execute a fuction accordingly.

// For example, on receiving action type of "INCREMENT_NUM",
// the reducer function will increment the value stored in state, which is 0 initially.

// Read more on Reducers - https://redux.js.org/docs/basics/Reducers.html

import * as AC from "../constants/action-types";


export default function reducer(state = 0, action) {
  let { type, payload } = action
  switch (type) {
    case AC.INCREMENT_NUM:
      state = state + 1
      break;
    case AC.DECREMENT_NUM:
      state = state - 1
      break;
    case AC.RESET:
      state = action.payload
      break;

  }


  return state;
}
