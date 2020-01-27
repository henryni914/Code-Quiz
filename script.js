var headerEl = document.getElementById("header");
var quizTimer = document.getElementById("timer");
var startEl = document.getElementById("start");
var initialCountdown = 100;
var buttonEl1 = document.getElementById("firstOption");
var buttonEl2 = document.getElementById("secondOption");
var buttonEl3 = document.getElementById("thirdOption");
var buttonEl4 = document.getElementById("fourthOption");
var questionPool = {
    "questions" : ["A","B","C","D"],
    "option1" : ["Wow","Hello"],
    "option2" : ["Kobe","My"],
    "option3" : ["Is","Name"],
    "option4" : ["Dead","is Henry"],
}
var i = 0;

function startQuiz() {
    
    var timerInterval = setInterval(function() {
        initialCountdown--;
        quizTimer.textContent = initialCountdown; + "seconds left"
        headerEl.style.display = "none";
        startEl.style.display = "none";
        document.getElementById("question").textContent = questionPool.questions[i];
        document.getElementById("firstOption").textContent = questionPool.option1[i];
        document.getElementById("secondOption").textContent = questionPool.option2[i];
        document.getElementById("thirdOption").textContent = questionPool.option3[i];
        document.getElementById("fourthOption").textContent = questionPool.option4[i];
    }, 1000);
}


//Create a function so when user clicks one of the options this function should run and display the next question and the possible options

function userClick() {
    i++;
    document.getElementById("question").textContent = questionPool.questions[i];
    document.getElementById("firstOption").textContent = questionPool.option1[i];
    document.getElementById("secondOption").textContent = questionPool.option2[i];
    document.getElementById("thirdOption").textContent = questionPool.option3[i];
    document.getElementById("fourthOption").textContent = questionPool.option4[i];
    console.log(i);
    var target = event.target.id;
    console.log (target);
}




startEl.onclick = startQuiz;
buttonEl1.onclick = userClick;
buttonEl2.onclick = userClick;
buttonEl3.onclick = userClick;
buttonEl4.onclick = userClick;



