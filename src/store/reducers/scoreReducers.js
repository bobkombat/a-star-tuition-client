import { RESET_SCORE, SET_SCORE } from "../actionTypes.js";

const initialState = {
  score: 0,
};

const scoreReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case SET_SCORE:
      return { ...state, score: state.score + 1 };
    case RESET_SCORE:
      return { ...state, score: 0 };
    default:
      return state;
  }
};

export default scoreReducers;
