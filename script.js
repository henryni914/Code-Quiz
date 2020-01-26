var headerEl = document.getElementById("header");
var quizTimer = document.getElementById("timer");
var startEl = document.getElementById("start");
var initialCountdown = 100;
var buttonEl1 = document.getElementById("firstOption");
var buttonEl2 = document.getElementById("secondOption");
var buttonEl3 = document.getElementById("thirdOption");
var buttonEl4 = document.getElementById("fourthtOption");
var questionPool = {
    "questions" : ["A","B","C","D"],
    "option1" : ["Wow","Hello"],
    "option2" : ["Kobe","My"],
    "option3" : ["Is","Name"],
    "option4" : ["Dead","is Henry"],
}
var i = 1;

function startQuiz() {
    
    var timerInterval = setInterval(function() {
        initialCountdown--;
        quizTimer.textContent = initialCountdown; + "seconds left"
        headerEl.style.display = "none";
        startEl.style.display = "none";
        document.getElementById("question").textContent = questionPool.questions[0];
        document.getElementById("firstOption").textContent = questionPool.option1[0];
        document.getElementById("secondOption").textContent = questionPool.option2[0];
        document.getElementById("thirdOption").textContent = questionPool.option3[0];
        document.getElementById("fourthOption").textContent = questionPool.option4[0];
    }, 1000);
}


//Create a function so when user clicks one of the options this function should run and display the next question and the possible options


startEl.onclick = startQuiz;
