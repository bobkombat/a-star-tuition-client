import { SET_SCORE } from "../actionTypes.js";

const initialState = {
  score: 0,
};

const scoreReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_SCORE:
      return { ...state, score: actions.payload.score };
    default:
      return state;
  }
};

export default scoreReducers;
