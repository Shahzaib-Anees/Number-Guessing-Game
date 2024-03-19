
alert("Welcome to Number Guessing Game");
let userLimit = +prompt("Enter the limit of Guess Number from 1 to 100");
let systemGenertedNum = Math.floor(Math.random() * userLimit);
console.log(systemGenertedNum);
alert(`Guess the number from 0 to ${userLimit - 1} `);
if (userLimit != NaN) {
    let userInputNum = +prompt("Enter your guess");
    console.log(userInputNum);
    if (userInputNum === systemGenertedNum) {
        alert("Hurrah! You have guess the Correct Number")
    } else {

        while (userInputNum != systemGenertedNum) {
            alert('Sorry! Wrong Guess');
            userInputNum = +prompt("Guess the number again");
            console.log(userInputNum);
            if (userInputNum === systemGenertedNum) {
                alert("Hurrah! You have guess the Correct Number")
            }
        }
    }
}