// Define buttons to start game, answer buttons (1-4), and question text
const enterButton = document.querySelector("#enter-button");
const enterToStart = document.querySelector(".enter-to-start");
const submitButton = document.querySelector("#submit");
const oneButton = document.querySelector("#one");
const twoButton = document.querySelector("#two");
const threeButton = document.querySelector("#three");
const fourButton = document.querySelector("#four");
const options = document.querySelector(".options");
var questionText = document.querySelector(".question-text");

// Define the container so we can use it to hide later
const container = document.querySelector(".container");

// Define score areas 
const scores = document.querySelector(".scores");
var userScore = document.querySelector("#user-score");
var totalScore = document.querySelector("#total-score");

// Define timer 
var timer = document.querySelector(".timer");

// Define results, scores, and initials 
var scoreBoard = document.querySelector(".score-board");
var results = document.querySelector(".results");
var correctAnswer = document.querySelector(".correct-answer");
var initials = document.querySelector("#initials");
var enterInitials = document.querySelector(".enter-initials");
var currentQuestion = 0;
var score = 0;
var highScore = document.querySelector(".high-score");
var number1Score = document.querySelector("#number1-score");
var submitInitials = document.querySelector(".submit-initials");

// Define after game selections of reset or restart game
var resetGameButton = document.querySelector("#reset-button");
var restartGameButton = document.querySelector("#restart-game-button");
var resetOrStart = document.querySelector(".reset-or-start");

// Questions for the quiz
var questions = [
  {
    question: "1. What is JavaScript function",
    answers: ["a. A block of JavaScript code that is executed when called", "b. Similar to a junction", "c. Compiles java code", "d. Removes stains from laundry"],
    answer: 1
  },
  {
    question: "2. In HTML, JavaScript is inserted between what tags?",
    answers: ["a. h1", "b. scipting", "c. script", "d. body"],
    answer: 3
  },
  {
    question: "3. Which is the correct syntax",
    answers: ["a. Math.floor(Math.random()", "b. math.floor(math.random()", "c. Math.ceiling(random)", "d. Math.random.floor"],
    answer: 1
  },
  {
    question: "4. Where does console.log get logged to?",
    answers: ["a. log directory on your computer", "b. browser console", "c. it doesn't get logged", "d. output to the screen"],
    answer: 2
  },
  {
    question: "5. What is JavaScript?",
    answers: ["a. A funny way to say tea", "b. An ancient middle eastern language", "c. A programming language", "d. The words on a bag of coffee"],
    answer: 3
  }    
];

// Define event listeners for submit/enter/reset/restart
submitButton.addEventListener("click", submit);
enterButton.addEventListener("click", startQuiz);
resetGameButton.addEventListener("click", resetGame);
restartGameButton.addEventListener("click", restartGame);

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
  stopTimer();
  questionText.classList.add("hide");
  options.classList.add("hide");
  scores.classList.add("hide");
  enterToStart.classList.add("hide");
  resetOrStart.classList.add("hide");
  results.classList.remove("hide");
  enterInitials.classList.remove("hide");
  scoreBoard.innerHTML = "Your final score is: " + score;
}

// Submit your initials and store score in local storage
submitInitials.addEventListener("click", function(event) {
  event.preventDefault();
  var scoreAndInitials = {
    userScore: score,
    initials: initials.value
  }
  // If user doesn't submit initials, alert them
  if (initials.value === "") {
    alert("You must input your initials");
    return;
  }

// See if there is local storage for allScores object and if not, create it
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
  // Display the top 5 scores and show them on different lines
  number1Score.innerHTML = "Here are the top scores: " + sortedScores.slice(0,5).map((item) => { 
    return "<br>" + item.initials + " scored " + item.userScore;
  }).join("");
  resetOrStart.classList.remove("hide");
  enterInitials.classList.add("hide");
  timer.classList.add("hide");
  score = 0;
  userScore.innerHTML = "0";
});

// Clear local storage and the screen
function resetGame() {
  localStorage.clear();
  number1Score.innerHTML = "";
  scoreBoard.classList.add("hide");
  timer.classList.add("hide");
}

// Restart the game after it's been played once 
function restartGame() {
  timer.classList.remove("hide");
  stopTimer();
  startQuiz();
}

// Stop the timer when called 
var timerID;
function stopTimer() {
  clearInterval(timerID);
  timerID = null;
}

// Start a game timer
function startTimer() {
  var timeLeft = 30;
  timerID = setInterval(function () {
    if (timeLeft > 1) {
      timer.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    }
    else {
      timer.textContent = "";
      clearInterval(timerID);
      showResults();
    }
  }, 1000);
  timer.classList.remove("hide"); 
}

// The quiz starts by hiding some elements and bringing forward the questions 
// If the user gets the correct answer, increment their score and tell them they got it right
// Otherwise tell them they got it wrong
function startQuiz() {
  startTimer();
  options.classList.remove("hide");
  results.classList.add("hide");
  questionText.classList.remove("hide");
  scores.classList.remove("hide");
  enterToStart.classList.add("hide");
  totalScore.classList.remove("hide");
  resetOrStart.classList.add("hide");

  currentQuestion  = 0;
  questionText.innerHTML = questions[currentQuestion].question;
  oneButton.innerHTML = questions[currentQuestion].answers[0];
  oneButton.onclick = () => {
    if (questions[currentQuestion].answer === 1) {
      score++;
      correctAnswer.innerHTML = "You got that right!";
    }
    else {
      correctAnswer.innerHTML = "Wrong!";
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