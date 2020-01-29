// HTML elements 
var headerEl = document.getElementById("header");
var quizTimer = document.getElementById("timer");
var startEl = document.getElementById("start");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answers")
var buttonEl1 = document.getElementById("firstOption");
var buttonEl2 = document.getElementById("secondOption");
var buttonEl3 = document.getElementById("thirdOption");
var buttonEl4 = document.getElementById("fourthOption");
var answerIs = document.getElementById("answerCheck");
var endEl = document.getElementById("end");
var submitForm = document.getElementById("score-form");
var submitEl = document.getElementById("submitScore");
var nameInput = document.getElementById("nameList");
var restartEl = document.getElementById("startOver");
var clearEl = document.getElementById("clearScores");
var highList = document.getElementById("highScores");
var scoreList = document.getElementById("listOfScores")

// 
var questionPool = {
    "questions": [
        "What is 1 + 1?", //Question 0
        "What's Kobe nickname?",
        "What does HTML stand for?",
        "What color do you get when mixing red and blue?",

    ],
    "option1": [
        "2", //Question 0 Option 1
        "KB-24",
        "HyperText Modern Language",

    ],
    "option2": [
        "11", //Question 0 Option 2
        "Purple Mamba",
        "HyperText Musical Language",

    ],
    "option3": [
        "undefined", //Question 0 Option 3
        "Black Mamba",
        "Hmm...The...Mother...Language???",

    ],
    "option4": [
        "0",  //Question 0 Option 4
        "Kobe",
        "HyperText Markup Language",

    ]
}
console.log(questionPool.questions.length);
var answerKey = ["firstOption", "thirdOption", "fourthOption", ""];
var initialCountdown = 100;
var i = 0;
var j = 0;
var k = 0;
var score = 0;
var userScores = [];
var userNames = [];

quizTimer.style.display = "none";
answerEl.style.display = "none";
questionEl.style.display = "none";
endEl.style.display = "none";

function startQuiz() {
    headerEl.style.display = "none";
    startEl.style.display = "none";
    quizTimer.style.display = "block";
    answerEl.style.display = "block";
    questionEl.style.display = "block";
    quizTimer.textContent = initialCountdown + " seconds left";
    questionEl.textContent = questionPool.questions[0];
    buttonEl1.textContent = questionPool.option1[0];
    buttonEl2.textContent = questionPool.option2[0];
    buttonEl3.textContent = questionPool.option3[0];
    buttonEl4.textContent = questionPool.option4[0];
    var timerInterval = setInterval(function () {
        initialCountdown--;
        quizTimer.textContent = initialCountdown + " seconds left";
        if (i >= questionPool.questions.length || initialCountdown == 0) {
            clearInterval(timerInterval);
            score = initialCountdown;
            quizTimer.textContent = "Score: " + initialCountdown;
            userScores.push(score);
            console.log(userScores);
            // storeInfo();
            console.log(score);
            endEl.style.display = "block";
            restartEl.style.display = "none";
            clearEl.style.display = "none";


        }
    }, 1000);
}

function userClick() {
    i++;
    if (i >= questionPool.questions.length || initialCountdown == 0) {
        answerEl.style.display = "none";
        //replace this with a new button (don't use buttonEl1) that is hidden until quiz is over that can restart the quiz
    }
    questionEl.textContent = questionPool.questions[i];
    buttonEl1.textContent = questionPool.option1[i];
    buttonEl2.textContent = questionPool.option2[i];
    buttonEl3.textContent = questionPool.option3[i];
    buttonEl4.textContent = questionPool.option4[i];
    console.log(i);
    var target = event.target.id;
    if (target == answerKey[j]) {
        console.log("The answer is: " + answerKey[j], "You clicked: " + target);
        j++;
        answerIs.textContent = "You are right!";
        setTimeout(function () {
            answerIs.textContent = '';
        }, 2000);
    } else {
        initialCountdown = initialCountdown - 10;
        console.log("The answer is: " + answerKey[j], "time left is: " + initialCountdown);
        j++;
        answerIs.textContent = "You are wrong!";
        setTimeout(function () {
            answerIs.textContent = '';
        }, 2000);
    }

    console.log(j);
}

local();

function localScores() { //renderTodos
    userNames.textContent = "";
    userScores.textContent = "";
    for (let k = 0; k < userScores.length; k++) {
        var localScore = userScores[k];
        var localName = userNames[k];

        var li = document.createElement("li");
        li.textContent = localScore + " " + localName;
        scoreList.appendChild(li);

    }
}
function local() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    var storedNames = JSON.parse(localStorage.getItem("names"));

    if (storedScores !== null) {
        userScores = storedScores;
        userNames = storedNames;
    }
    localScores();
}

function storeInfo() {
    localStorage.setItem("scores", JSON.stringify(userScores));
    localStorage.setItem("names", JSON.stringify(userNames));
}

function submit() {
    event.preventDefault();
    if (nameText === "") {
        return;
    }
    var nameText = nameInput.value;
    userNames.push(nameText);
    // userScores.push(scoreText);
    console.log(userNames, nameText);
    nameInput.value = "";
    storeInfo();
    // localScores();

};

startEl.onclick = startQuiz;
buttonEl1.onclick = userClick;
buttonEl2.onclick = userClick;
buttonEl3.onclick = userClick;
buttonEl4.onclick = userClick;
submitEl.onclick = submit;