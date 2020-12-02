export function getRandomizeQuestion(questionData, questionAmount) {
  console.log(questionData.sort(() => Math.random() - 0.5).slice(0, questionAmount));
  return questionData.sort(() => Math.random() - 0.5).slice(0, questionAmount);
}
