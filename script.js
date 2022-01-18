const enterButton = document.querySelector("#enter-button");
const previousButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const submitButton = document.querySelector("#submit");
const trueButton = document.querySelector("#True");
const falseButton = document.querySelector("#False");
var enterToStart = document.querySelector(".enter-to-start");
var userScore = document.querySelector("#user-score");
var totalScore = document.querySelector("#total-score");
var questionText = document.querySelector(".question-text");
var timer = document.querySelector(".timer");

let currentQuestion = 0;
var score = 0;

let questions = [
  {
    question: "What is javascript",
    answers: [
      { option: "Javascript isn't for dummies", answer: true },
      { option: "Javascript is for dummies", answer: false }
    ]
  },
  {
    question: "What is ble blah blue",
    answers: [
      { option: "Jello", answer: false },
      { option: "My made up word", answer: true }
    ]
  },
  {
    question: "What is bedtime",
    answers: [
      { option: "Earlier the better", answer: true },
      { option: "Later is better", answer: false }
    ]
  }
]

previousButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);
submitButton.addEventListener("click", submit);
enterButton.addEventListener("click", startQuiz);

function startQuiz() {
  trueButton.classList.remove("hide");
  falseButton.classList.remove("hide");
  questionText.classList.remove("hide");
  userScore.classList.remove("hide");
  totalScore.classList.remove("hide");
  enterToStart.classList.add("hide");
  enterButton.classList.add("hide");

  currentQuestion: 0;
  questionText.innerHTML = questions[currentQuestion].question;
  trueButton.innerHTML = questions[currentQuestion].answers[0].option;
  trueButton.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answers[ano].answer) {
      score++;
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }

  falseButton.innerHTML = questions[currentQuestion].answers[1].option;
  falseButton.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      score++;
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
}

function next() {
  currentQuestion++;
  questionText.innerHTML = questions[currentQuestion].question;
  trueButton.innerHTML = questions[currentQuestion].answers[0].option;
  trueButton.onclick = () => {
    let ano = 0;
    if (questions[currentQuestion].answers[ano].answer) {
      score++;
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }

  falseButton.innerHTML = questions[currentQuestion].answers[1].option;
  falseButton.onclick = () => {
    let ano = 1;
    if (questions[currentQuestion].answers[ano].answer) {
      score++;
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
}
beginQuestions();

function beginQuestions() {
  nextButton.classList.add("hide");
  previousButton.classList.add("hide");
  submitButton.classList.add("hide");
  trueButton.classList.add("hide");
  falseButton.classList.add("hide");
  questionText.classList.add("hide");
  userScore.classList.add("hide");
  totalScore.classList.add("hide");

}

function submit() {
  nextButton.classList.add("hide");
  previousButton.classList.add("hide");
  submitButton.classList.add("hide");
  trueButton.classList.add("hide");
  falseButton.classList.add("hide");
  questionText.innerHTML = "Way to Go you Genious";
}


// Start a game timer
function startTimer() {
  var timeLeft = 10;
  setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    }
    else {
      timer.textContent = "";
      clearInterval;
      displayMessage();
    }
  }, 1000);
}

function displayMessage() {
  if (document.getElementById("correct").checked) {
    alert("Damn you're good!");
    clickNext();
  }
}


// // Start Quiz

// // Start timer for each question

// // Ask question and give options

// // Verify and report answer

// // Store score

// // At the end of the game, enter initials 

// // Show high scores

// submitButton.addEventListener("click", startGame);