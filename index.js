algoritmA();

function algoritmA () {
    const guess = "hojlo".toUpperCase();
    const answer = "jumbo".toUpperCase();
    const output = [];


    console.log("Your guess is: " + guess);
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] == answer[i]) {
            console.log("Letter " + guess[i] + " is: Correct");
            output.push({letter: guess[i], result: "correct"});
        } else if (guess[i] !== answer[i] && answer.includes(guess[i])){
            console.log("Letter " + guess[i] + " is: Misplaced");
            output.push({letter: guess[i], result: "misplaced"});
        } else {
            console.log("Letter " + guess[i] + " is: Incorrect");
            output.push({letter: guess[i], result: "incorrect"});
        }
    };
    console.log(output);
};