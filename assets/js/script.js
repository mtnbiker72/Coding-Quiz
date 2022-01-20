const enterButton = document.querySelector("#enter-button");
const nextButton = document.querySelector("#next");
const submitButton = document.querySelector("#submit");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const options = document.querySelector("#options");
const navifate = document.querySelector(".navigate");
const scores = document.querySelector(".scores");
const container = document.querySelector(".container");
var enterToStart = document.querySelector(".enter-to-start");
var userScore = document.querySelector("#user-score");
var totalScore = document.querySelector("#total-score");
var questionText = document.querySelector(".question-text");
var timer = document.querySelector(".timer");
var scoreBoard = document.querySelector(".score-board");
var results = document.querySelector(".results");
var correctAnswer = document.querySelector("#correct-answer");
var initials = document.querySelector("#initials");
var enterInitials = document.querySelector(".enter-initials");
var currentQuestion = 0;
var score = 0;
var highScore = document.querySelector(".high-score");
var submitInitials = document.querySelector(".submit-initials");
var resetGameButton = document.querySelector("#reset-button");
var restartGameButton = document.querySelector("#restart-game-button");
var resetOrStart = document.querySelector("#reset-or-start");

var questions = [
  {
    question: "What is javascript",
    answers: ["A funny way to say tea", "An ancient middle eastern language", "Computer stuff", "The words on a bag of coffee"],
    answer: 3
  },
  {
    question: "What HTML element do we put JavaScript",
    answers: ["h1", "scipting", "script", "body"],
    answer: 3
  },
  {
    question: "Which is the correct syntax",
    answers: ["Math.floor(Math.random()", "math.floor(math.random()", "Math.ceiling(random)", "Math.random.floor"],
    answer: 1
  },
  {
    question: "Where does console.log get logged to?",
    answers: ["log directory on your computer", "web console", "it doesn't get logged", "output to the screen"],
    answer: 2
  }  
];

submitButton.addEventListener("click", submit);
enterButton.addEventListener("click", startQuiz);
resetGameButton.addEventListener("click", resetGame);

// Advances to the next question and sets the answers to correspond with the buttons
function next() {
  currentQuestion++;
  questionText.innerHTML = questions[currentQuestion].question;
  oneButton.innerHTML = questions[currentQuestion].answers[0];
  twoButton.innerHTML = questions[currentQuestion].answers[1];
  threeButton.innerHTML = questions[currentQuestion].answers[2];
  fourButton.innerHTML = questions[currentQuestion].answers[3];
}

// Hide the rest of the screen and show results
function showResults() {
  container.classList.add("hide");
  results.classList.remove("hide");
  scoreBoard.innerHTML = "Your final score is: " + score;
}

submitInitials.addEventListener("click", function(event) {
  event.preventDefault();
  var scoreAndInitials = {
    userScore: score,
    initials: initials.value
  }
  var allScores = JSON.parse(localStorage.getItem("allScores"));
  if (!allScores ) {
    allScores = [];
  }
  // Sort the scores from highest to lowest
  allScores.push(scoreAndInitials);
  var sortedScores = allScores.sort((a,b) => {
    return b.userScore - a.userScore;
  });
  // Store the scores in local storage
  localStorage.setItem("allScores", JSON.stringify(sortedScores));
  var number1Score = document.querySelector("#number1-score");
  // Display the top 5 scores and show them on different lines
  number1Score.innerHTML = "Here are the top 5 scores: " + sortedScores.slice(0,5).map((item) => { 
    return "<br>" + item.initials + " scored " + item.userScore;
  }).join("");
  restartGameButton.addEventListener("click", startQuiz);
});

function resetGame() {
  localStorage.clear();
}

beginquestions();

function beginquestions() {
  options.classList.add("hide");
  submitButton.classList.add("hide");
  scores.classList.add("hide");
  questionText.classList.add("hide");
  results.classList.add("hide");
}

function submit() {
  submitButton.classList.add("hide");
  options.classList.add("hide");
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
    }
  }, 1000);
}

function startQuiz() {
  options.classList.remove("hide");
  questionText.classList.remove("hide");
  scores.classList.remove("hide");
  enterToStart.classList.add("hide");
  totalScore.classList.remove("hide");

  currentQuestion: 0;
  questionText.innerHTML = questions[currentQuestion].question;
  oneButton.innerHTML = questions[currentQuestion].answers[0];
  oneButton.onclick = () => {
    if (questions[currentQuestion].answer === 1) {
      score++;
      correctAnswer.innerHTML = "You got that right!"
    }
    else {
      correctAnswer.innerHTML = "Wrong!"
    }
    userScore.innerHTML = score;
    if (currentQuestion < questions.length - 1) {
      next();
    }
    else {
      showResults();
    }
  }

  twoButton.innerHTML = questions[currentQuestion].answers[1];
  twoButton.onclick = () => {
    if (questions[currentQuestion].answer === 2) {
      score++;
      correctAnswer.innerHTML = "You got that right!"
    }
    else {
      correctAnswer.innerHTML = "Wrong!"
    }
    userScore.innerHTML = score;
    if (currentQuestion < questions.length - 1) {
      next();
    }
    else {
      showResults();
    }
  }
  threeButton.innerHTML = questions[currentQuestion].answers[2];
  threeButton.onclick = () => {
    if (questions[currentQuestion].answer === 3) {
      score++;
      correctAnswer.innerHTML = "You got that right!"
    }
    else {
      correctAnswer.innerHTML = "Wrong!"
    }
    userScore.innerHTML = score;
    if (currentQuestion < questions.length - 1) {
      next();
    }
    else {
      showResults();
    }
  }
  fourButton.innerHTML = questions[currentQuestion].answers[3];
  fourButton.onclick = () => {
    if (questions[currentQuestion].answer === 4) {
      score++;
      correctAnswer.innerHTML = "You got that right!"
    }
    else {
      correctAnswer.innerHTML = "Wrong!"
    }
    userScore.innerHTML = score;
    if (currentQuestion < questions.length - 1) {
      next();
    }
    else {
      showResults();
    }
  }
}