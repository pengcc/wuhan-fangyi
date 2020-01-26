// Actions are payloads of information that send data from your application to your store.
// They are the only source of information for the store.

// Actions are triggered either by user through interactions or by an events, such as successful AJAX call.

// Read more on Actions - https://redux.js.org/docs/basics/Actions.html

import * as AC from "../constants/action-types";

export function incrementNum(payload) {
  return {
    type: AC.INCREMENT_NUM,
    payload: payload
  };
}

export function decrementNum(payload) {
  return {
    type: AC.DECREMENT_NUM,
    payload: payload
  };
}

export function resetCounter(payload) {
  return {
    type: AC.RESET,
    payload: payload
  };
}


