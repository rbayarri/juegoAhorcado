let btnNewWord = document.querySelector("#btn-new-word");
btnNewWord.addEventListener("click", newWord);

let btnCancelNew = document.querySelector("#btn-cancel");
btnCancelNew.addEventListener("click", function(event){
  event.preventDefault();
  backToStartScreen();
});

let btnStartGame = document.querySelector("#btn-start-game");
btnStartGame.addEventListener("click", function () {
  chooseWord();
  startGame();
});

let newWordForm = document.querySelector("#form-new-word-2");
newWordForm.addEventListener("submit", function(){
  let word = newWordForm.word.value;
  //validateInput();
  event.preventDefault();
  canvas.dataset.word = encrypt(word);
  startGame();
  newWordForm.word.value = "";
});

let btnSurrender = document.querySelector("#btn-surrender");
btnSurrender.addEventListener("click",function(){
  clear();
  clearGame();
  backToStartScreen();
});

let btnOtherGame = document.querySelector("#btn-new-game");
btnOtherGame.addEventListener("click",function(){
  clear();
  clearGame();
  chooseWord();
  startGame();
})

function newWord() {
  let startScreen = document.querySelector("#start-screen");
  startScreen.classList.add("d-none");
  let form = document.querySelector("#form-new-word");
  form.classList.remove("d-none");
}

function backToStartScreen() {
  let startScreen = document.querySelector("#start-screen");
  startScreen.classList.remove("d-none");
  let form = document.querySelector("#form-new-word");
  form.classList.add("d-none");
  let game = document.querySelector("#game-screen");
  game.classList.add("d-none");
}

function createLetterSpaces(word) {
  let resultPlace = document.querySelector("#guessed-letters");
  let width = resultPlace.clientWidth / word.length;
  width = width - width / 4;
  for (let i = 0; i < word.length; i++) {
    let span = document.createElement("span");
    span.classList.add("letter-space");
    span.classList.add("letter-" + i);
    span.classList.add("empty");
    span.style.width = width + "px";
    span.textContent = "5";
    resultPlace.appendChild(span);
    addSpace(resultPlace, width / 3);
  }
}

function addSpace(parent, width) {
  let space = document.createElement("span");
  space.textContent = " ";
  if (width <= 15) {
    space.style.width = width + "px";
  } else {
    space.style.width = "15px";
  }
  parent.appendChild(space);
}
