import InitialState from "./types";
import { Action } from "./types";
import { ActionTypes } from "../actions/names";

const initialState: InitialState = {
  counter: 0,
}

const rootReducer = (state = initialState, action: Action) => {
  switch(action.type) {
    case ActionTypes.INCREMENT: return { ...state, counter: state.counter + 1 };
    default: return state;
  }
}

export default rootReducer;
