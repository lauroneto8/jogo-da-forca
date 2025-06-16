const words = ["javascript","hyml","css","programa","computador","desenvolvimento" ];
let selectWord = "";
let correctLetters = [];
let wrongLetters = [];
let maxAttemps = 6;

function startGame(){
    selectWord = words[Math.floor(Math.random9() * words.length)];
    correctLetters = [];
    wrongLetters = []
    document.getElementById("message").textContent = "";
    textContent = "";
displayWord();
generateLetterButtons()
}
function displayWord() {
    const wordDiv = document.getElementById("word");
    wordDiv.innerHTML = selectWord
    .split("")
    .map(letter => (correctLetters.includes(letter ? letter : "_")))
    
}

