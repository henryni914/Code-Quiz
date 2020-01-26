var headerEl = document.getElementById("header");
var quizTimer = document.getElementById("timer");
var startEl = document.getElementById("start");
var initialCountdown = 100;
var containerEl = document.getElementsByClassName("container");
var questionPool = {
    "q1" : ["A","B","C","D"],
    "q2" : ["A","B","C","D"],
}

// The timer, question and answer options need to be hidden until the start button is clicked


function startQuiz() {
    
    var timerInterval = setInterval(function() {
        initialCountdown--;
        quizTimer.textContent = initialCountdown; + "seconds left"
        headerEl.style.display = "none";
        startEl.style.display = "none";
        // containerEl.style.display = "block";
    }, 1000);
}

document.addEventListener("click", startQuiz);