let btnNewWord = document.querySelector("#btn-new-word");
btnNewWord.addEventListener("click", newWord);

let btnCancelNew = document.querySelector("#btn-cancel");
btnCancelNew.addEventListener("click", backToStartScreen);

function newWord() {
  let startScreen = document.querySelector("#start-screen");
  startScreen.classList.add("d-none");
  let form = document.querySelector("#form-new-word");
  form.classList.remove("d-none");
}

function backToStartScreen(event) {
  event.preventDefault();
  let startScreen = document.querySelector("#start-screen");
  startScreen.classList.remove("d-none");
  let form = document.querySelector("#form-new-word");
  form.classList.add("d-none");
}

function createLetterSpaces(word) {
  let resultPlace = document.querySelector("#guessed-letters");
  let width = resultPlace.clientWidth / word.length;
  width = width - width / 4;
  for (let i = 0; i < word.length; i++) {
    let span = document.createElement("span");
    span.classList.add("letter-space");
    span.style.width = width + "px";
    resultPlace.appendChild(span);
    addSpace(resultPlace, width / 3);
  }
}

function addWrongLetter(letter) {
  let wrongLetters = document.querySelector("#wrong-letters");
  let wrongLetter = document.createElement("span");
  wrongLetter.textContent = letter;
  wrongLetters.appendChild(wrongLetter);
  addSpace(wrongLetters);
}

function addSpace(parent, width) {
  let space = document.createElement("span");
  space.textContent = " ";
  if (width <= 15) {
    space.style.width = width + "px";
  }else{
    space.style.width = "15px";
  }
  parent.appendChild(space);
}
