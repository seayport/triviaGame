///Timer Trivia game
//making sure the DOM is ready
$(document).ready(function(){

//store your game in an object
"use strict";
  var timeRemaining = 0;
  var questionObject;
  var timer;
  var rightAnswers = [];
  var wrongAnswers = [];
  var noAnswer = [];
  var unansweredQuestions = [];
  var remainingQuestions = [ {
    q: "what is the color of the moon?",
    answer: ["Gray", "Blue", "Red", "Green"]
    correct: "Gray"
  }, {
    q: "where does batman live?",
    answer: ["Gotham", "New York", "LA", "Atlanta"]
    correct: "Gotham"
  }, {
    q: "what is 2 + 2?",
    answer: ["4", "7", "8", "12"]
    correct: 4
  }, {
    q: "what is the microsoft logo?",
    answer: ["window", "f", "mermaid", "triangle"]
    correct: "window"
  }, {
    q: "what is the shape of a wheel?",
    answer: ["circle", "square", "hexagon", "rectangle"]
  	correct: "circle"
  },
];
function incrementTimer() {
    timer = setTimeout( function () {
      $( '#timer' ).text( timeRemaining );
      if ( timeRemaining <= 0 ) {
        //unanswered
        unanswered.push( questionObject );
        alert( 'Time is UP' );
        askQuestion();
      } else {
        timeRemaining = timeRemaining - 1;
        incrementTimer();
      }

    }, 1000 );
  }

  function startTimer() {
    clearTimeout( timer );
    timeRemaining = 10; // in seconds
    incrementTimer();
  }

  function askQuestion() {
    if ( remainingQuestions.length <= 0 ) {
      // you done
      clearTimeout(timer);
      alert (" you got correct: " + rightAnswers.length);
      alert (" you got wrong: " + wrongAnswers.length);
      alert (" you got unanswered: " + unanswered.length);
    } else {
      startTimer();
      $( '#containerForChoiceOptions' ).html( "" );
      questionObject = remainingQuestions.pop();
      //var answer = prompt( question.q );
      // if ( answer === question.answer )
      //   rightAnswers.push( question );
      // else
      //   wrongAnswers.push( question );
      //   
      var choices = questionObject.answer;
      $( '#asked-question' ).html( questionObject.q );
      for ( var i = 0; i < choices.length; i++ ) {
        var choice = $( '<div>' );
        choice.text( choices[ i ] );
        choice.attr( 'id', "choice-" + i );
        choice.attr( 'index', i );
        $( '#containerForChoiceOptions' ).append( choice );

        choice.click( function () {
          //alert("I GUESSED "+ this.innerHTML);
          if ( this.innerHTML === questionObject.correct ) {
            alert( "YAY" );
            rightAnswers.push( questionObject );
            askQuestion();
          } else {
            alert( "boo!" );
            wrongAnswers.push( questionObject );
            askQuestion();
          }
        } );
      }
    }
  }
  askQuestion();



	































