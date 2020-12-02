import { SET_SCORE, RESET_SCORE } from "../actionTypes";

export function increaseScore() {
  return (dispatch) => {
    dispatch({
      type: SET_SCORE,
    });
  };
}

export function resetScore() {
  return (dispatch) => {
    dispatch({
      type: RESET_SCORE,
    });
  };
}
