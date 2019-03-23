//VARIABLES

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ['banana', 'grape','kiwi', 'apple', 'pear', 'plum', 'watermelon', 'pineapple', 'guava', 'mango'];
var word = randomWord();

var wordArray = word.split("");
var incorrectGuessesArray = [];
var answerArray = [];

var wordText = document.getElementById("wordText");
var wordGuessesText = document.getElementById("guessCount");
var lettersGuessedText = document.getElementById("lettersGuessed");
var winCountText = document.getElementById("winCount");
var lossCountText = document.getElementById("lossCount");

var remainingGuesses = 10;
var winCount = 0;
var lossCount = 0;

//FUNCTIONS

function randomWord() {
    var randomWord = words[Math.floor(Math.random() * words.length)];

    return randomWord;
};

function gameWin() {
    alert("You Won! The word was " + word + "!");

    winCount++;
    remainingGuesses = 10;

    incorrectGuessesArray = [];

    winCountText.textContent = winCount;
    lettersGuessedText.textContent = incorrectGuessesArray;
    wordGuessesText.textContent = remainingGuesses;

    randomWord();
    word = randomWord();

    wordArray = word.split("");
    answerArray = [];

    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_ ";
    }
    
    var remainingLetters = word.length;
    
    wordText.textContent = (answerArray.join(""));
};

function gameLoss() {
    alert("Sorry, you ran out of guesses!");

    lossCount++;
    remainingGuesses = 10;

    incorrectGuessesArray = [];

    lossCountText.textContent = lossCount;
    lettersGuessedText.textContent = incorrectGuessesArray;
    wordGuessesText.textContent = remainingGuesses;

    randomWord();
    word = randomWord();

    wordArray = word.split("");
    answerArray = [];

    for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_ ";
    }
    
    var remainingLetters = word.length;
    
    wordText.textContent = (answerArray.join(""));

};


//PROCESS

for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_ ";
}

var remainingLetters = word.length;

wordText.textContent = (answerArray.join(""));

document.onkeyup = function (event) {

    var userGuessLower = event.key;
    var guess = userGuessLower.toLowerCase();

    if (letters.indexOf(guess) > -1) {

        if (incorrectGuessesArray.indexOf(guess) > -1 || answerArray.indexOf(guess) > -1) {
            return alert("You already guessed that letter!");
        };


        if (wordArray.indexOf(guess) > -1) {
            for (var j = 0; j < wordArray.length; j++) {
                if (word[j] === guess) {
                    answerArray[j] = guess;
                    wordGuessesText.textContent = remainingGuesses
                    wordText.textContent = answerArray.join(" ");
                }
            }

        } else {
            remainingGuesses--;
            wordGuessesText.textContent = remainingGuesses
            incorrectGuessesArray.push(guess);
            lettersGuessedText.textContent = incorrectGuessesArray;
        };

        console.log("wordArray= " + wordArray);
        console.log("answerArray= " + answerArray);



        if (wordArray.toString() === answerArray.toString()) {
            gameWin();
        };


        if (remainingGuesses === 0) {
            gameLoss();
        };
    }
}


                // function gameWin (){
                //     alert ("You Won! The word was " + word + "!");

                //     randomWord ();
                //     word = randomWord ();

                //     winCount++;
                //     remainingGuesses = 10;

                //     incorrectGuessesArray = [];
                //     answerArray = [];

                //     winCountText.textContent = winCount;
                //     wordGuessesText.textContent = remainingGuesses;
                //     lettersGuessedText.textContent = incorrectGuessesArray;
                // };


                // function gameLoss (){
                //     alert ("Sorry, you ran out of guesses!");

                //     randomWord ();
                //     word = randomWord ();

                //     lossCount++;
                //     remainingGuesses = 10;

                //     incorrectGuessesArray = [];
                //     answerArray = [];

                //     lossCountText.textContent = lossCount;
                //     wordGuessesText.textContent = remainingGuesses;
                //     lettersGuessedText.textContent = incorrectGuessesArray;

                // };
