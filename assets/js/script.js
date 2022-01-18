const enterButton = document.querySelector("#enter-button");
const previousButton = document.querySelector("#prev");
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

var currentQuestion = 0;
var score = 0;

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

previousButton.addEventListener("click", prev);
nextButton.addEventListener("click", next);
submitButton.addEventListener("click", submit);
enterButton.addEventListener("click", startQuiz);

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

function next() {
  currentQuestion++;
  questionText.innerHTML = questions[currentQuestion].question;
  oneButton.innerHTML = questions[currentQuestion].answers[0];
  twoButton.innerHTML = questions[currentQuestion].answers[1];
  threeButton.innerHTML = questions[currentQuestion].answers[2];
  fourButton.innerHTML = questions[currentQuestion].answers[3];
}

function showResults() {
  container.classList.add("hide");

}
beginquestions();

function beginquestions() {
  options.classList.add("hide");
  previousButton.classList.add("hide");
  submitButton.classList.add("hide");
  nextButton.classList.add("hide");
  questionText.classList.add("hide");
  scores.classList.add("hide");

}

function submit() {
  nextButton.classList.add("hide");
  previousButton.classList.add("hide");
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
