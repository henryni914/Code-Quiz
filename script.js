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
var score = 0;
var userScores = [];
var userNames = [];

answerEl.style.visibility = "hidden";
questionEl.style.visibility = "hidden";

function startQuiz() {
    headerEl.style.display = "none";
    startEl.style.display = "none";
    answerEl.style.visibility = "visible";
    questionEl.style.visibility = "visible";
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
            questionEl.textContent = "Score: " + score;
            questionEl.style.visibility = "visible";
            userScores.push(score);
            console.log(userScores);
            storeScores();
            score = "";
            console.log(score);
        }
    }, 1000);
}

function userClick() {
    i++;
    if (i >= questionPool.questions.length || initialCountdown == 0) {
        answerEl.style.visibility = "hidden";
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
        score = score + 10;
        console.log("The answer is: " + answerKey[j], "Your score is: " + score, "You clicked: " + target);
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

// function localScores() {
//     for (let k = 0; i < userScores.length; i++);
//     var localScore = userScores[k];

//     var li = document.createElement("li");
//     li.textContent = localScore;

// }

function storeScores() {
    localStorage.setItem("scores",JSON.stringify(userScores))
}

// function storeNames() {
//     localStorage.setItem("names",JSON.stringify())
// }

startEl.onclick = startQuiz;
buttonEl1.onclick = userClick;
buttonEl2.onclick = userClick;
buttonEl3.onclick = userClick;
buttonEl4.onclick = userClick;



