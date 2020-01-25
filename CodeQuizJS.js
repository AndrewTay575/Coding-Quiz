// Timer functionality
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};

// Question functionality
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
    
};
function loadNextQuestion() {
    var selectedOption = document.querySelector('button[type=button]:checked');
    if(!selectedOption){
        alert("Please select your answer!");
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion.answer == answer]){
        score += 10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = "Finish";
    }
    if(currentQuestion == totQuestions) {
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = "Your Score: " + score;
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);
