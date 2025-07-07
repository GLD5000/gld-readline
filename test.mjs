import { selectLineFromStringArray, answerStringQuestion } from "./src/index.mjs";
const lines = ["one", "two", "three"];

const selectedLine = await selectLineFromStringArray(lines, 2, "Choose Default");
console.log('selectedLine:', selectedLine);
console.assert(selectedLine === "two");

const stringAnswer = await answerStringQuestion('Type: hello')
console.log('stringAnswer:', stringAnswer);
console.assert(stringAnswer === "hello");
