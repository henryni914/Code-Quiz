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
        "What is Kobe's nickname?",
        "What does HTML stand for?",
        "What color do you get when mixing red and blue?",
        "What does CDN stand for?",
        "If the last Chinese zodiac year of the Dog was in 2018, when will the next be?"
    ],
    "option1": [
        "2", //Question 0 Option 1
        "KB-24",
        "HyperText Modern Language",
        "Purple",
        "Central Data Network",
        "2028",
    ],
    "option2": [
        "11", //Question 0 Option 2
        "Purple Mamba",
        "HyperText Musical Language",
        "Green",
        "Content Delivery Network",
        "2023",
    ],
    "option3": [
        "undefined", //Question 0 Option 3
        "Black Mamba",
        "Hmm...The...Mother...Language???",
        "Orange",
        "Content Delivery Node",
        "2030",
    ],
    "option4": [
        "0",  //Question 0 Option 4
        "Kobe",
        "HyperText Markup Language",
        "No idea",
        "Central Delivery Network",
        "2024",
    ]
}
var answerKey = ["firstOption", "thirdOption", "fourthOption", "firstOption","secondOption","thirdOption",];
var initialCountdown = 90;
var i = 0;
var j = 0;
var k = 0;
var score = 0;
var userScores = [];
var userNames = [];

initial();

function initial() {
    initialCountdown = 100;
    i = 0;
    j = 0;
    k = 0;
    score = 0;
    headerEl.style.display = "block";
    startEl.style.display = "block";
    quizTimer.style.display = "none";
    answerEl.style.display = "none";
    questionEl.style.display = "none";
    endEl.style.display = "none";
    scoreList.style.display = "none";
}

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
        if (i >= questionPool.questions.length) {
            clearInterval(timerInterval);
            score = initialCountdown;
            quizTimer.textContent = "Score: " + initialCountdown;
            endEl.style.display = "block";
            restartEl.style.display = "none";
            clearEl.style.display = "none";
        }
        if (initialCountdown == 0){
            clearInterval(timerInterval);
            score = initialCountdown;
            quizTimer.textContent = "Score: " + initialCountdown;
            endEl.style.display = "block";
            restartEl.style.display = "none";
            clearEl.style.display = "none";
            answerEl.style.display = "none";
            questionEl.style.display = "none";
        }
    }, 1000);
}

function userClick() {
    i++;
    if (i >= questionPool.questions.length || initialCountdown == 0) {
        answerEl.style.display = "none";
        submitForm.style.display = "block";
        submitEl.style.display = "block";
    }
    questionEl.textContent = questionPool.questions[i];
    buttonEl1.textContent = questionPool.option1[i];
    buttonEl2.textContent = questionPool.option2[i];
    buttonEl3.textContent = questionPool.option3[i];
    buttonEl4.textContent = questionPool.option4[i];
    var target = event.target.id;
    if (target == answerKey[j]) {
        j++;
        answerIs.textContent = "You are right!";
        setTimeout(function () {
            answerIs.textContent = '';
        }, 2000);
    } else {
        initialCountdown = initialCountdown - 10;
        j++;
        answerIs.textContent = "You are wrong!";
        setTimeout(function () {
            answerIs.textContent = '';
        }, 2000);
    }
}

function endQuiz() {
    endEl.style.display = "block";
    restartEl.style.display = "none";
    clearEl.style.display = "none";
}

local();
function local() {
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    var storeNames = JSON.parse(localStorage.getItem("names"));
    if (storedScores !== null) {
        userScores = storedScores;
        console.log(userScores);
        userNames = storeNames;
        console.log(userNames);
        localScores(storedScores , storeNames);
    }
}

function localScores(storedScores, storeNames) {
    console.log (storeNames, storedScores);
    scoreList.innerHTML = "";
    console.log (storeNames, storedScores, "userScores is " + userScores);
    for (let k = 0; k < userScores.length; k++) {
        var localScore = userScores[k];
        var localName = userNames[k];
        var li = document.createElement("li");
        li.textContent = localScore + " " + localName;
        scoreList.appendChild(li);
    }
}

function storeInfo() {
    localStorage.setItem("scores", JSON.stringify(userScores));
    localStorage.setItem("names", JSON.stringify(userNames));
}

function submit() {
    event.preventDefault();
    if (nameInput.value == "") {
        alert("Please enter a name");
    } else {
        var nameText = nameInput.value;
        userNames.push(nameText);
        userScores.push(score);
        nameInput.value = "";
        storeInfo();
        displayScore();
        highList.style.display = "block";
        localScores();
    }
};

function displayScore() {
    quizTimer.textContent = "Score List"
    submitForm.style.display = "none";
    submitEl.style.display = "none";
    scoreList.style.display = "block";
    restartEl.style.display = "block"
    clearEl.style.display = "block";
}

function clearScoreList() {
    localStorage.clear("scores", "names");
    scoreList.textContent = "";
}

function restartQuiz() {
    initial();
}

startEl.onclick = startQuiz;
buttonEl1.onclick = userClick;
buttonEl2.onclick = userClick;
buttonEl3.onclick = userClick;
buttonEl4.onclick = userClick;
submitEl.onclick = submit;
clearEl.onclick = clearScoreList;
restartEl.onclick = restartQuiz;