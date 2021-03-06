let lives = 6;
let lettersUser = [];
let indexes = [];

function chooseWord() {
  let index = randomNumber();
  canvas.dataset.word = palabras[index];
}

function startGame() {
  let startScreen = document.querySelector("#start-screen");
  startScreen.classList.add("d-none");
  let gameScreen = document.querySelector("#game-screen");
  gameScreen.classList.remove("d-none");
  let form = document.querySelector("#form-new-word");
  form.classList.add("d-none");
  calculateDimensions();
  let code = canvas.dataset.word;
  createLetterSpaces(decrypt(code));
  drawGallow();
  document.body.addEventListener("keypress", keyPressFunction);
}

function keyPressFunction(event) {
  if (validateLetter(event.key)) {
    let letter = event.key.toUpperCase();
    if (alreadyTyped(letter)) {
      return;
    }
    lettersUser.push(letter);
    if (isLetterInWord(letter)) {
      letterGuessed(letter);
    } else {
      wrongLetter(letter);
    }
  }
}

function validateLetter(letter){
  let pattern = /[A-z]/;
  return pattern.test(letter);
}

function alreadyTyped(letter) {
  return lettersUser.includes(letter);
}

function isLetterInWord(letter) {
  let word = decrypt(canvas.dataset.word);
  for (let i = 0; i < word.length; i++) {
    if (word[i] == letter) {
      indexes.push(i);
    }
  }
  return indexes.length;
}

function letterGuessed(letter) {
  addGuessedLetter(letter);
  clearIndexes();
  checkGame();
}

function addGuessedLetter(letter) {
  for (let i = 0; i < indexes.length; i++) {
    let span = document.querySelector(".letter-" + indexes[i]);
    span.textContent = letter;
    span.classList.remove("empty");
  }
}

function wrongLetter(letter) {
  addWrongLetter(letter);
  lives--;
  draw();
  checkGame();
}

function addWrongLetter(letter) {
  let wrongLetters = document.querySelector("#wrong-letters");
  let wrongLetter = document.createElement("span");
  wrongLetter.textContent = letter;
  wrongLetters.appendChild(wrongLetter);
  addSpace(wrongLetters);
}

function clearIndexes() {
  while (indexes.length > 0) {
    indexes.pop();
  }
}

function checkGame() {
  if (lives == 0) {
    document.body.removeEventListener("keypress", keyPressFunction);
    canvas.classList.add("bg-danger");
    setTimeout(function () {
      alert("Perdiste. La palabra era: " + decrypt(canvas.dataset.word));
    }, 400);
    return;
  }
  let notEmpty = document.querySelectorAll(".empty");
  if (notEmpty.length === 0) {
    document.body.removeEventListener("keypress", keyPressFunction);
    canvas.classList.add("bg-success");
    setTimeout(function () {
      alert("??Ganaste!");
    }, 400);
  }
}

function draw() {
  switch (lives) {
    case 5:
      drawHead();
      break;
    case 4:
      drawBody();
      break;
    case 3:
      drawLeftArm();
      break;
    case 2:
      drawRightArm();
      break;
    case 1:
      drawLeftLeg();
      break;
    case 0:
      drawRightLeg();
      break;
  }
}

function clearGame() {
  canvas.dataset.word = "";
  clear();
  lives = 6;
  clearIndexes();
  lettersUser = [];
  let letterGuessed = document.querySelector("#guessed-letters");
  letterGuessed.innerHTML = "";
  let wrongLetters = document.querySelector("#wrong-letters");
  wrongLetters.innerHTML = "";
  document.body.removeEventListener("keypress", keyPressFunction);
  canvas.classList.remove("bg-success");
  canvas.classList.remove("bg-danger");
}

let palabras = [
  "U3Vl8W8=",
  "QmF0YWxsYQ==",
  "RWxlZmFudGU=",
  "RmlsZXRl",
  "Q2hvcXVl",
  "R3JhbmVybw==",
  "Q29icmU=",
  "TWFuemFuYQ==",
  "Q29ydGluYQ==",
  "TXVzaWNh",
  "UmVjcmVv",
  "Q2FtcGFuYQ==",
  "VmlnYQ==",
  "UmVjb21wZW5zYQ==",
  "Um9wYQ==",
  "U29tYnJlcm8=",
  "Qm9saWdyYWZv",
  "Q2FudGFudGU=",
  "U2VtYW5h",
  "VHJ1Y28=",
  "RW50cmVuYWRvcg==",
  "QXV0b21vdmls",
  "Q3VpZGFkbw==",
  "TnVleg==",
  "VG9tYXRl",
  "VmlhamU=",
  "Q2FyYWNvbA==",
  "R3VzdG8=",
  "QXRhcXVl",
  "VGVzb3Jv",
  "Q2FjdHVz",
  "QXJyb3o=",
  "RXhwZXJ0bw==",
  "RG9jdW1lbnRhY2lvbg==",
  "SnVndWV0ZQ==",
  "Q2FiYWxsbw==",
  "UmVxdWVyaW1pZW50bw==",
  "RXNjdWRv",
  "VGllbmRh",
  "RXN0YW5jaWE=",
  "TW9kbw==",
  "UGV6",
  "Q2FzdGlsbG8=",
  "VG9ycmU=",
  "RHJhZ29u",
  "U29mYQ==",
  "VGVsZXZpc2lvbg==",
  "RXN0cmVsbGE=",
  "SW5zdGl0dWNpb24=",
  "Q2FtaW5v",
  "Q29oZXRl",
  "VHJhbnF1aWxpZGFk",
  "SmFyZGlu",
  "RmxhbWVuY28=",
  "R3VlcnJh",
  "Q2l2aWxpemFjaW9u",
  "RnV0Ym9s",
  "QmFsb25jZXN0bw==",
  "VHJpYW5ndWxv",
  "RG9sb3I=",
  "UGVycm8=",
  "VHJlYm9s",
  "UHJvdGVzdGE=",
  "RnJhc2Nv",
  "RmFtaWxpYQ==",
  "RGluZXJv",
  "QWplZHJleg==",
  "Q2llbmNpYQ==",
  "QWNhZGVtaWE=",
  "Q3JheW9u",
  "VGlncmU=",
  "UGFsbWVyYQ==",
  "T3JkZW4=",
  "Q2FwaXRhbg==",
  "UmVpbmE=",
  "UmV0cm9hbGltZW50YWNpb24=",
  "SW52ZXJzaW9u",
  "TXVlYmxl",
  "Q2Fvcw==",
  "VGVsYQ==",
  "RGVzY3VicmltaWVudG8=",
  "SGFsbGF6Z28=",
  "TW9udGHxYQ==",
  "UG9ydGVybw==",
  "Q3JpYXR1cmE=",
  "Q3VhcnRv",
  "TWFudGVuaW1pZW50bw==",
  "U2VndXJpZGFk",
  "Qm9kZWdh",
  "QWN0b3I=",
  "TWF0ZW1hdGljYXM=",
  "Q2FuY2lvbg==",
  "U2lsbGE=",
  "SGVybWFubw==",
  "Q29udHJvbA==",
  "UHJpb3JpZGFk",
  "RW1vY2lvbg==",
  "R2xvcmlh",
  "VmVsYQ==",
  "TWFuY2hh",
  "VGllcnJh",
  "Q29uZWpv",
  "RnVlZ28=",
  "Tmnxbw==",
  "RWxlY3Ryb2RvbWVzdGljbw==",
  "RGVkbw==",
  "UGVyc29uYWxpZGFk",
  "SHVldm8=",
  "RGlzY28=",
  "U3VldGVy",
  "SmlyYWZh",
  "VmlzdGE=",
  "VnVlbG8=",
  "UG9zaWNpb24=",
  "TnViZQ==",
  "QXBpbw==",
  "U2VjcmV0YXJpYQ==",
  "Q3JpbWVu",
  "Q3VlbmNh",
  "UmFtYQ==",
  "QXJlbmE=",
  "SGlqbw==",
  "U29tYnJh",
  "UGVzbw==",
  "U2lzdGVtYQ==",
  "UG9saXRpY2E=",
  "RXF1aXBv",
  "R3VhbnRl",
  "VmFjYQ==",
  "RW5zYWxhZGE=",
  "TmFjaW9u",
  "UGFyYWlzbw==",
  "RG9jdG9y",
  "Q3VlbGxv",
  "TWVqaWxsYQ==",
  "QW5hbGlzaXM=",
  "QW5ndWxv",
  "Q2llbG8=",
  "RW1wbGVv",
  "QWxhbWJyZQ==",
  "Q2Vibw==",
  "RXN0YWxsaWRv",
  "Q2FzYQ==",
  "VGVuc2lvbg==",
  "T3JnYW5pemFjaW9u",
  "U2VydmlsbGV0YQ==",
  "QWNjaW9u",
  "RXhwZXJpZW5jaWE=",
  "TWFydGlsbG8=",
  "RXh0cmHxbw==",
  "VG9ybWVudGE=",
  "TGx1dmlh",
  "UGVuc2FtaWVudG8=",
  "TXVlbGxl",
  "Q2FyYQ==",
  "TW9uZWRh",
  "Q2VudGF2bw==",
  "RXNjYWxvbg==",
  "U29mdHdhcmU=",
  "Q2FtYQ==",
  "QnVmYW5kYQ==",
  "TWFzY2FyYQ==",
  "TGVjdHVyYQ==",
  "SW5kdXN0cmlh",
  "RXNwZXJhbnph",
  "Q2FtcGVvbmF0bw==",
  "UmV2b2x1Y2lvbg==",
  "Q2FsY3VsYWRvcmE=",
  "QWxhcm1h",
  "UmFuZ28=",
  "QXJpdG1ldGljYQ==",
  "RnJ1dGE=",
  "Qm90ZWxsYQ==",
  "VmVudGFuYQ==",
  "QWd1amE=",
  "TW90b3I=",
  "UmVwb2xsbw==",
  "TW9ubw==",
  "TGFwaXo=",
  "VmVzdGlkbw==",
  "U2VsdmE=",
  "RXNjdWFkcmE=",
  "QWlyZQ==",
  "TmllYmxh",
  "UGxhbmV0YQ==",
  "Q2FsY2V0aW4=",
  "QWR2ZXJ0ZW5jaWE=",
  "Vmlkcmlv",
  "RXN0b2ZhZG8=",
  "TGlubw==",
  "RXhwbG9zaW9u",
  "Vm9sdW1lbg==",
  "Q2FpZGE=",
  "UHJlc2VuY2lh",
  "UHJvcGlldGFyaW8=",
  "Q2hpc3Bh",
  "Q29ub2NpbWllbnRv",
  "QW51bmNpbw==",
  "SWdsZXNpYQ==",
  "UmVsaWdpb24=",
  "SW50ZXJhY2Npb24=",
  "QXBhcmF0bw==",
  "QWd1YQ==",
  "R3Jhbmph",
  "TW92aW1pZW50bw==",
  "R290YQ==",
  "Q3JlZW5jaWE=",
  "QWNlcm8=",
  "U29wYQ==",
  "Q3JlbWE=",
  "UHJvZmVzb3I=",
  "UmVwcmVzZW50YW50ZQ==",
  "Q3JlYWRvcg==",
  "TWFkcmU=",
  "UGludHVyYQ==",
  "UGFzaWxsbw==",
  "R2FuYWRvcg==",
  "RW5jaHVmZQ==",
  "Q2VsZWJyYWNpb24=",
  "RGlyZWN0b3I=",
  "Q29sbWlsbG8=",
  "QWRtaW5pc3RyYWNpb24=",
  "UmFzdHJpbGxv",
  "SW52aWVybm8=",
  "Q29jaW5h",
  "Q29zdGE=",
  "VHJvbm8=",
  "U29jaWVkYWQ=",
  "R29iaWVybm8=",
  "R29yaWxh",
  "Tm90YQ==",
  "Rmlsb3NvZmlh",
  "Q3JlY2ltaWVudG8=",
  "Q29uc2VjdWVuY2lh",
  "TGlicm8=",
  "VGVsZWZvbm8=",
  "QXJ0ZQ==",
  "TWFub3BsYQ==",
  "Q3Vibw==",
  "VGVjbm9sb2dpYQ==",
  "QXJwYQ==",
  "R3VpdGFycmE=",
  "QXp1Y2Fy",
  "R2F0bw==",
  "U29ucmlzYQ==",
  "Q29uZGFkbw==",
  "TmF0dXJhbGV6YQ==",
  "RGlmaWN1bHRhZA==",
  "Vml2aWVuZGE=",
  "Q29jaGU=",
  "QXZpb24=",
  "Q3VhZHJhZG8=",
  "QXV0b3Bpc3Rh",
  "U2FsYXJpbw==",
  "VHJhZGljaW9u",
  "Q29uc3RpdHVjaW9u",
  "UmVjb21lbmRhY2lvbg==",
  "UmV1bmlvbg==",
  "SXNsYQ==",
  "UHJlY2lv",
  "QXJh8WE=",
  "UG9zaWJpbGlkYWQ=",
  "Q29jb2RyaWxv",
  "Q2FtaW9uZXRh",
  "VW5pb24=",
  "SW50ZXJlcw==",
  "TGltaXRl",
  "QmFzZQ==",
  "Q2FiZWxsbw==",
  "TWVtYnJpbGxv",
  "TGFtcGFyYQ==",
  "TW90aXZv",
  "SmFib24=",
  "SG9tYnJl",
  "TWVuZGlnbw==",
  "UGVuYQ==",
  "TWFlc3Rybw==",
  "QXNpZW50bw==",
  "TGliZXJ0YWQ=",
  "VGllbXBv",
  "Qm9jYQ==",
  "UmFuYQ==",
  "RXhwbGljYWNpb24=",
  "Q3VuYQ==",
  "RGV2b3Rv",
  "SG9yb3Njb3Bv",
  "Q3JlYWNpb24=",
  "UGFpcw==",
  "U2VycGllbnRl",
  "RXNmdWVyem8=",
  "VGl0dWxv",
  "Qm90b24=",
  "SW50ZXJuZXQ=",
  "VGVycmVtb3Rv",
  "VGFyamV0YQ==",
  "TWllZG8=",
  "QXJib2w=",
  "RXNwYWNpbw==",
  "Q29uc2Vqbw==",
  "TmVjZXNpZGFk",
];

function randomNumber() {
  return Math.floor(Math.random() * (palabras.length + 1));
}

function decrypt(code) {
  return atob(code).toUpperCase();
}

function encrypt(word) {
  return btoa(word);
}
