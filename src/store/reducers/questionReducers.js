import { draggableQuestion, multipleChoice, textboxQuestion } from "./questionData/index.js";

const initialState = {
  questions: [...draggableQuestion, ...multipleChoice, ...textboxQuestion],
};

const questionReducers = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default questionReducers;
