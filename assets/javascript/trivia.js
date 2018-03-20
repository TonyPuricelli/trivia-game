// load page before functions take effect
$(document).ready(function() {

// QUIZ INFO - stored in object array
var questionArray = [
    {
      question: "In what country is Lisbon?",
      choices: ["Morocco", "Portugal", "New Zealand"],
      answer: 1,
      photo: "../images/lisbon.jpg"
    },
    {
      question: "In what country is Abu Dhabi?",
      choices: ["Monaco", "Qatar", "United Arab Emirates"],
      answer: 2,
      photo: "../images/abu-dhabi.jpg"
    },
    {
      question: "In what country is Kuala Lumpur?",
      choices: ["Malaysia", "Bangladesh", "Singapore"],
      answer: 0,
      photo: "../images/kuala-lumpur.jpg"
    }
  ];

// VARIABLES
var current = 0;
var correct = 0;
var wrong = 0;

var countdownTimer = {
    time: 30,
    reset: function() {
        this.time = 30;
        $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
    },
    start: function() {
        counter = setInterval(countdownTimer.count, 1000);	
    },
    stop: function() {
        clearInterval(counter);
    },
    count: function() {
            countdownTimer.time--;
            console.log(countdownTimer.time);
        if (countdownTimer.time >= 0) {
            $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
        }
        else {
            index++;
            answerWrong();
            countdownTimer.reset();
            if (index < questionArray.length) {
                loadQuestion(index);
            } else {
                $(".answerchoice").hide();
                showScore();
            }
        }
    }
};

// FUNCTIONS

// loads current quiz question and button
function buildQuiz(questions) {
    $("#question").text(questions[current].question);
    // console.log(questions[current]);
    for (var j=0; j < questions[current].choices.length; j++) {
        $("#choices").append("<input type='radio' name='choice' value=' " + j + "'>" + questions[current].choices[j] + "<br>");
    };

    // evaluate whether answer is correct

        // if correct, load correct screen with timeout - 3 sec

        // if incorrect, load incorrect screen with timeout - 3 sec

    // if end of quiz, show 'submit' button
    if (current == (questions.length - 1)) {
        $("#next").hide();
        $("#submit").show();
    // else, show 'next' button
    } else {
        $("#next").show();
    };

};

// show results
function showResults() {
    // show div
    $('#result').show();
    // add scores to child elements
    $('#result').append();
};
// next question


// EVENTS

// on page load -- hide extra divs
$('#next').hide();
$('#submit').hide();
$('#result').hide();

// on click - start quiz button
$('#start').on("click", function(){
    $('#start').hide();
    buildQuiz(questionArray);
    current++;
});

// click submit button
$('#submit').on("click", function(){
    showResults();
});

// click next question
$('#next').on("click", function(){
    // empty form fields
    $("#choices").empty();
    // fill with new options
    buildQuiz(questionArray);
    // increase counter for next question
    current++;
});

});