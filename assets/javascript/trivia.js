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
var current = 0; //current question
var correct = 0; // tally of correct answers
var wrong = 0; // tally of wrong answers
var timer = 30; // 30 seconds - use for timeout calls

// BORROWED CODE SITTING HERE FOR REFERENCE
// var countdownTimer = {
//     time: 30,
//     reset: function() {
//         this.time = 30;
//         $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
//     },
//     start: function() {
//         counter = setInterval(countdownTimer.count, 1000);	
//     },
//     stop: function() {
//         clearInterval(counter);
//     },
//     count: function() {
//             countdownTimer.time--;
//             console.log(countdownTimer.time);
//         if (countdownTimer.time >= 0) {
//             $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
//         }
//         else {
//             index++;
//             answerWrong();
//             countdownTimer.reset();
//             if (index < questionArray.length) {
//                 loadQuestion(index);
//             } else {
//                 $(".answerchoice").hide();
//                 showScore();
//             }
//         }
//     }
// };

// FUNCTIONS

// load current quiz question
function buildQuiz(questions) {
    // load current question
    $("#question").text(questions[current].question);

    // load current question's image to background - NOT YET FUNCTIONAL
    $("body").css("background-image", "url('" + questions[current].photo + "');");
    console.log(questions[current].photo);

    //loop through answer choices
    for (var j=0; j < questions[current].choices.length; j++) {
        // add buttons for each answer choice of current question
        // id for each should correspond with index in array -- e.g. #choiceJ
        // will use id to evaluate correct answers
        var text = questions[current].choices[j];
        $("#choices").append("<button type='button' class='btn btn-secondary choice' value='" + j + "'>" + text + "</button> <br >");
    };

    // OBSOLETE CODE SITTING HERE FOR REFERENCE
    // if end of quiz, show 'submit' button
    // if (current == (questions.length - 1)) {
    //     $("#next").hide();
    //     $("#submit").show();
    // // else, show 'next' button
    // } else {
    //     $("#next").show();
    // };

};

function nextQuestion() {
    // empty form fields
    $("#choices").empty();
    // fill with new options
    buildQuiz(questionArray);
    // increase counter for next question
    current++;
}

// show results at end of quiz
function showResults() {
    // show div
    $('#result').show();
    // add scores to child elements
    $('#result').append(); // incomplete -- will fill in values later
};

// next question


// EVENTS

// on page load -- hide extra divs
    // $('#next').hide();
    // $('#submit').hide();
    $('#result').hide();

// on click start quiz button -- load first question
$('#start').on("click", function(){
    // hide start button
    $('#start').hide();
    // populate form
    buildQuiz(questionArray);
    // increase counter for next question
    current++;
});

// on click submit button -- move to results phase
    // will end timer and display total # correct
$('#submit').on("click", function(){
    showResults();
});

// on click - user selects a response -- record response, display result with timeout, load next question
// all choice buttons have class 'choice'
// **NOTE: This event is not activating for some reason
$('.choice').on("click", function(){
    console.log(this);
    // evaluate answer using number from value compared with answer value
    var idNumber = this.value;
    if (idNumber == questionArray[current].answer) {
        // call function to signal correct
        
    } else {
        // call function to signal incorrect
    }

    // load next question
    nextQuestion();
});

});