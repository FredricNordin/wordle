algoritmA();

function algoritmA () {
    const guess = "hello".toUpperCase();
    const answer = "jumbo".toUpperCase();

    for (let i = 0; i < guess.length; i++) {
        if (guess[i] == answer[i]) {
            console.log("Letter " + guess[i] + " is: Correct");
        } else {
            console.log("Letter " + guess[i] + " is: Incorrect");
        }
    };
};