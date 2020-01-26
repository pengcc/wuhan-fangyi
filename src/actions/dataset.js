import * as AC from "../constants/action-types";

export function setDemand(demand) {
    return {
      type: AC.SET_DEMAND_LIST,
      demand: demand
    }
  }