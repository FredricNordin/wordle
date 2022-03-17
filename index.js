algoritmA();

function algoritmA () {
    const guess = "Heljo".toUpperCase();
    const answer = "jumbo".toUpperCase();

    console.log("Your guess is: " + guess);
    for (let i = 0; i < guess.length; i++) {
        if (guess[i] == answer[i]) {
            console.log("Letter " + guess[i] + " is: Correct");
        } else if (guess[i] !== answer[i] && answer.includes(guess[i])){
            console.log("Letter " + guess[i] + " is: Misplaced");
        } else {
            console.log("Letter " + guess[i] + " is: Incorrect");
        }
    };
};