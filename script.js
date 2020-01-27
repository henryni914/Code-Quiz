var headerEl = document.getElementById("header");
var quizTimer = document.getElementById("timer");
var startEl = document.getElementById("start");
var questionEl = document.getElementById("question");
var buttonEl1 = document.getElementById("firstOption");
var buttonEl2 = document.getElementById("secondOption");
var buttonEl3 = document.getElementById("thirdOption");
var buttonEl4 = document.getElementById("fourthOption");
var answerIs = document.getElementById("answerCheck");
var questionPool = {
    "questions": [
        "What is 1 + 1?", //Question 0
        "What's Kobe nickname?",
        "What does HTML stand for?"],
    "option1": [
        "2", //Question 0 Option 1
        "KB-24",
        "HyperText Modern Language"],
    "option2": [
        "11", //Question 0 Option 2
        "Purple Mamba",
        "HyperText Musical Language"],
    "option3": [
        "undefined", //Question 0 Option 3
        "Black Mamba",
        "Hmm...The...Mother...Language???"],
    "option4": [
        "0",  //Question 0 Option 4
        "Kobe",
        "HyperText Markup Language"]
}
console.log(questionPool.questions.length);
var answerKey = ["firstOption", "thirdOption", "fourthOption", "fourthOption"];
var initialCountdown = 100;
var i = 0;
var j = 0;
var score = 0;

document.getElementById("answers").style.visibility = "hidden";
document.getElementById("question").style.visibility = "hidden";

function startQuiz() {
    var timerInterval = setInterval(function () {
        if (i >= questionPool.questions.length || initialCountdown == 0) {
            clearInterval(timerInterval);
            document.getElementById("question").textContent = "Score: " + score;
            document.getElementById("answers").style.visibility = "hidden";
            document.getElementById("question").style.visibility = "visible";
            document.getElementById("firstOption").style.visibility = "visible";
            document.getElementById("firstOption").textContent = "Start Over"
        } else {
            initialCountdown--;
            quizTimer.textContent = initialCountdown + " seconds left"
            headerEl.style.display = "none";
            startEl.style.display = "none";
            document.getElementById("answers").style.visibility = "visible";
            document.getElementById("question").style.visibility = "visible";
            document.getElementById("question").textContent = questionPool.questions[i];
            document.getElementById("firstOption").textContent = questionPool.option1[i];
            document.getElementById("secondOption").textContent = questionPool.option2[i];
            document.getElementById("thirdOption").textContent = questionPool.option3[i];
            document.getElementById("fourthOption").textContent = questionPool.option4[i];
        }
    }, 1000); //}
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
    if (target == answerKey[j]) {
        score = score + 10;
        console.log(answerKey[j], "Your score is: " + score, target);
        j++;
        document.getElementById("answerCheck").textContent = "You are right!";
        setTimeout(function () {
            document.getElementById("answerCheck").textContent = '';
        }, 2000);
    } else {
        initialCountdown = initialCountdown - 10;
        console.log(answerKey[j], initialCountdown);
        j++;
        document.getElementById("answerCheck").textContent = "You are wrong!";
        setTimeout(function () {
            document.getElementById("answerCheck").textContent = '';
        }, 2000);
    }

    console.log(j);
}


startEl.onclick = startQuiz;
buttonEl1.onclick = userClick;
buttonEl2.onclick = userClick;
buttonEl3.onclick = userClick;
buttonEl4.onclick = userClick;



