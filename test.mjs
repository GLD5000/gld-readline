import { selectLineFromText } from "./src/utils/selectLineFromText.mjs";
const lines = ["one", "two", "three"];

const selectedLine = await selectLineFromText(lines, 2, "Choose Default");
console.log('selectedLine:', selectedLine);
console.assert(selectedLine === "two");
