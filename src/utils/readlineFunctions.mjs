// import readline from 'readline';
import * as readline from "node:readline/promises";

/**
 * Gives the user a selection of lines/answers to choose from in the terminal
 * then returns their selected line as a string
 * @param {string[]} lines
 * @param {number} defaultNumber
 * @param {string} title
 * @returns {Promise<string>}
 */
export async function selectLineFromStringArray(
  lines,
  defaultNumber = 1,
  title = "Select a line:"
) {
  const rl = getReadLine();
  try {
    logMultilineOptions(title, lines);
    const question =
      "\n" +
      `Enter line number to select (default is ${lines[defaultNumber - 1]}): `;
    const answer = await rl.question(question);
    const lineNumber = parseInt(answer);
    const shouldUseDefault =
      isNaN(lineNumber) || lineNumber <= 0 || lineNumber > lines.length;
    if (shouldUseDefault) {
      return lines[defaultNumber - 1];
    }
    return lines[lineNumber - 1];
  } catch (error) {
    return JSON.stringify(error);
  } finally {
    rl.close();
  }
}

function logMultilineOptions(title, lines) {
  console.log(title + "\n");
  lines.forEach((line, index) => {
    console.log(`${index + 1}. ${line}`);
  });
}
/**
 * Asks a given question in the terminal (with an optional default for empty user input) and returns the string response
 * @param {string} question
 * @param {string | undefined} defaultValue
 * @returns {Promise<string>}
 */
export async function answerStringQuestion(question, defaultValue) {
  const rl = getReadLine();
  try {
    const answer = defaultValue
      ? await rl.question(`${question} (${defaultValue}): `)
      : await rl.question(`${question}: `);
    const answerIsBlank = !answer.trim();
    if (answerIsBlank && !defaultValue) {
      const err = new Error("Please enter a value");
      console.error("Input should not be blank.", err);
      return err;
    } else if (answerIsBlank && defaultValue) {
      return defaultValue;
    } else {
      return answer;
    }
  } catch (error) {
    return JSON.stringify(error);
  } finally {
    rl.close();
  }
}
/**
 * Gets readline interface
 * @returns {function}
 */
function getReadLine() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}
