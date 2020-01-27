// Timer functionality
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        //var selectedOption = document.querySelector('input[type=radio]:checked');
        //console.log(timer);

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        console.log(seconds);
        //console.log(timer);
        
        //  if(selectedOption.checked = false) {
        //     timer = duration - 30;
        //     minutes = parseInt(timer / 60, 10);
        //     seconds = parseInt(timer % 60, 10);
    
        //     minutes = minutes < 10 ? "0" + minutes : minutes;
        //     seconds = seconds < 10 ? "0" + seconds : seconds;
    
        //     display.textContent = minutes + ":" + seconds;
             
            
        //  }
    
    
            
        

        if(--timer < 0) {
            minutes = 00;
            seconds = 00;
            display.textContent = minutes + ":" + seconds;
            container.style.display = "none";
            resultCont.style.display = "";
            resultCont.textContent = "Time is up!"
            resultCont.textContent = "Your Score: " + score + "/50";
        
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
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert("Please select your answer!");
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 10;
    }
    // Does not add points to score if answer is wrong
    selectedOption.checked = false;
    
    
    currentQuestion++;
    
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = "Finish";
        //nextButton.attr(href = "CodeQuizHighScores.html");
    }
     if(currentQuestion == totQuestions) {
         container.style.display = "none";
         resultCont.style.display = "";
        //  var highscoreStyle = $("<div>");
        //  highscoreStyle.addClass("jumbotron");
        //  $("#display").append(highscoreStyle);
        //  var jumboTxt = $("<h1>");
        //  jumboTxt.addClass("display-4");
        //  jumboTxt.text("High Scores");
        //  $("#jumbotron").append(jumboTxt);
        //  var instructTxt = $("<p>");
        //  instructTxt.addClass("lead");
        //  instructTxt.text("Click on the button to add your score!");
        //  $("#jumbotron").append(instructTxt);
        //  var newP = $("<p>");
        //  newP.addClass("lead");
        //  $("#instructTxt").append(newP);
        //  var scoreBtn = $("<a>");
        //  scoreBtn.addClass("btn btn-primary btn-lg");
        //  scoreBtn.text("New Score");
        //  $("#lead").append(scoreBtn)



         

        
         resultCont.textContent = "Your Score: " + score + "/50";
                 
         console.log(score);
        
        return;
     }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);

function scoreboard() {
    var newInitial = prompt("Please enter your full name.");
    var newScore = resultCont;
    var newHighScore = newInitial + ":" + newScore;
    var newP = $("<p>");
    newP.text(newHighScore);
    $("#result").append("<br><hr>" + newP);


    
}