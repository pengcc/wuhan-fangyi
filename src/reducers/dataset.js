import * as AC from "../constants/action-types";

const initialState = {
  demand: []
}

export default function reducer(state = initialState, action) {
  let { type, payload } = action
  switch (type) {
    case AC.SET_DEMAND_LIST:
      let {demand} = action
      state = {
        ...state,
        demand: demand
      }
      break;

  }


  return state;
}