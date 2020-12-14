//declare all variables
var start = document.getElementById("start");
var quiz = document.getElementById("quiz");
var quizQuestion = document.getElementById("quizQuestion");
var quizImg = document.getElementById("quizImg");
var optionA = document.getElementById("choiceA");
var optionB = document.getElementById("choiceB");
var optionC = document.getElementById("choiceC");
var optionD = document.getElementById("choiceD");
var scoreBlock = document.getElementById("scoreBlock");
var scoreMessage = document.getElementById("scoreMessage");
var quizAgain = document.getElementById("quizAgain");
var choices = document.getElementById("choices");
var choiceResponse = document.getElementById("choiceResponse");
var score = 0;

//questions function so our getQuestion function later can get the right value from array

let questions = [{
    question: "Welches Haustier möchte Juna gerne haben?",
    choiceA: "Fische",
    choiceB: "Hund",
    choiceC: "Katze",
    choiceD: "Hamster",
    correctAnswer: "B"
}, {
    question: "Welchen Laptop hätte Lucas gerne?",
    imgSrc: "lucas vick/ RE3oYJc.png",
    choiceA: "Surface Go",
    choiceB: "Macbook Pro M1",
    choiceC: "Macbook Air M1",
    choiceD: "Macbook Air 2020",
    correctAnswer: "C"
}, {
    question: "Was ist der Kosename von dem Pferd das vielleicht bald ein Fohlen bekommt?",
    choiceA: "Karötchen",
    choiceB: "Mörchen",
    choiceC: "Amura",
    choiceD: "Sunny",
    correctAnswer: "B"
}, {
    question: "Was machen Juna und Lucy am liebsten zusammen?",
    choiceA: "Harry Potter Fakten Videos auf Youtube gucken",
    choiceB: "Harry Potter Quizes machen",
    choiceC: "Harry Potter Spiel spielen",
    choiceD: "Harry Potter Filme gucken",
    correctAnswer: "D"
}, {
    question: "Was ist Papas Lieblingsfarbe?",
    
    choiceA: "hellblau",
    choiceB: "mittelblau",
    choiceC: "dunkelblau",
    choiceD: "schwarz",
    correctAnswer: "B"
}, {
    question: "Was für ein Motorrad hatte Papa früher?",
    choiceA: "Chopper",
    choiceB: "Straßenmaschine",
    choiceC: "Enduru",
    choiceD: "Roller",
    correctAnswer: "C"
}, {
    question: "Wo habe ich Leon kennengelernt?",
    choiceA: "Auf dem Pausenhof",
    choiceB: "Durch Sport",
    choiceC: "Spanisch",
    choiceD: "Videospiele",
    correctAnswer: "C"
}, {
    question: "Was ist Junas größter Wunsch?",
    choiceA: "Haflinger (Pferd)",
    choiceB: "Falabella (Pferd)",
    choiceC: "Friese",
    choiceD: "Hund",
    correctAnswer: "A"
}, {
    question: "Wer ist Justus bester Freund?",
    choiceA: "Maurice",
    choiceB: "Linus",
    choiceC: "Kjell",
    choiceD: "Matteo",
    correctAnswer: "B"
}, {
    question: "Which bird is this?",
    imgSrc: "assets/birds/kereru.jpg",
    choiceA: "Kiwi",
    choiceB: "New Zealand Pigeon/Kererū",
    choiceC: "Kingfisher/Kōtare",
    choiceD: "Eastern Bar-Tailed Godwit/Kuaka",
    correctAnswer: "B"
}, ];


var questionIndex = 0;


// getQuestion function

function getQuestion() {

    choiceResponse.style.display = "none";
    let q = questions[questionIndex];
    quizQuestion.innerHTML = "<p>Question " +(questionIndex+1) + ": " + q.question + "</p>";
    quizImg.innerHTML = "<img src=" + q.imgSrc + ">";
    optionA.innerHTML = q.choiceA;
    optionB.innerHTML = q.choiceB;
    optionC.innerHTML = q.choiceC;
    optionD.innerHTML = q.choiceD;
    choices.style.display = "block";
}


// start quiz

function beginQuiz() {
    start.style.display ="none";
    getQuestion();
    quiz.style.display = "block";
}

// show score function

function showScore() {
    quiz.style.display = "none";
    scoreBlock.style.display = "block";
    scoreBlock.innerHTML = "<p> You scored " + score + " out of 10!</p>";

    if (score < 4) {
        scoreMessage.innerHTML = "<p>Not so good! Time for some revision.</p>";
    }
    else if (score < 8) {
        scoreMessage.innerHTML = "<p>Pretty good! But still room for improvement.</p>"
    }
    else {
        scoreMessage.innerHTML = "<p>Great work! You really know your birds!</p>"
    }
    scoreMessage.style.display = "block";
    quizAgain.style.display = "block";
}


//function to check if answer is correct

function check(answer) {
    if (questionIndex < questions.length - 1) {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Richtig!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
        else {
            questionIndex++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Nop!</p>"
            choiceResponse.style.display = "block";
            setTimeout(getQuestion,2000);
        }
    }
    else {
        if (answer == questions[questionIndex].correctAnswer) {
            score++;
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Richtig!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
        else {
            choices.style.display = "none";
            choiceResponse.innerHTML= "<p>Nö!</p>"
            choiceResponse.style.display = "block";
            setTimeout(showScore,2000);
        }
    }
}

function restartQuiz() {
    start.style.display = "block";
    scoreBlock.style.display = "none";
    scoreMessage.style.display = "none";
    quizAgain.style.display = "none";
    score = 0;
    questionIndex = 0;
}