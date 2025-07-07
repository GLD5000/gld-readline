# [gld-readline](https://www.npmjs.com/package/@gld5000k/readline)

Easy to use readline functions for interactive CLI scripts

## Example usage

### Install

```
npm i -D @gld5000k/readline
```

### Import (.mjs)

```
import { selectLineFromStringArray, answerStringQuestion } from '@gld5000k/readline';
```

### Select a line from a string array

```
const lines = ["Line one", "Line two", "Line three"];
const selectedLine = await selectLineFromStringArray(lines, 2, "Choose Default");
console.log('selectedLine:', selectedLine);
```

### Ask a question with a string answer (mandatory)

```
const stringAnswer = await answerStringQuestion('Enter file path:')
console.log('stringAnswer:', stringAnswer);
```
