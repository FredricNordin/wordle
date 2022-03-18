export default function algorithmA(guessInput, answerInput) {
  const guess = guessInput.toUpperCase();
  const answer = answerInput.toUpperCase();
  const output = [];

  // For reference to whether the correct letters are in place.
  const correctCheck = { C: "correct" };

  // Check which letters are correct.
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      correctCheck[guess[i]] = "correct";
    }
  }
  // Save each corresponding letter to an array showing which are correct, misplaced and incorrect.
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      output.push({ letter: guess[i], result: "correct" });
    } else if (
      correctCheck[guess[i]] !== "correct" &&
      answer.includes(guess[i])
    ) {
      output.push({ letter: guess[i], result: "misplaced" });
    } else {
      output.push({ letter: guess[i], result: "incorrect" });
    }
  }
  // Output the results.
  console.log(output);
  return output;
}