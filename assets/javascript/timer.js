///Timer Trivia game
//store your game in an object

  var timeRemaining = 0;
  var questionObject;
  var timer;
  var rightAnswers = [];
  var wrongAnswers = [];
  var noAnswer = [];
  var unansweredQuestions = [];
  var remainingQuestions = {}
  
  $("#maingame, #endScreen").hide();
  $('#A, #B, #C').click(answerCheck);
  $("#StartButton").click(init);
  
  
  var questions = [{  
    question: "SuperBowl XXVII- Pasadena, California  Dallas Cowboys 52, Buffalo Bills 17 The 1993 half-time show ranks as one of the all time best making marching bands a thing of the past! Who performed changing the future of the SuperBowl half-time show?",
    choices: ["Michael Jackson", "Tony Bennett, Patti LaBelle, Miami Sound Machine", "Gloria Estefan, Dorothy Hammill and Brian Boitano", "Whitney Houston"],
    correct: "0"
  },
  {
    question: "Who played in the Georgia Dome for the half-time show?",
    choices: ["Bryan Adams, Rod Stewart and Sting","Tim McGraw, Faith Hill, Vince Gill", "Michael Jackson", "Kris Kross, TLC, and Michael Jackson", "Clint Black, Tanya Tucker, Travis Tritt, Naomi and Wynonna Judd"],
    correct: "3"
  },
  {
    question: "Name the Superbowl 1999 half-time performer/s?",
    choices: ["Boyz II Men, Smokey Robinson, Queen Latifah, Martha Reeves and The Temptations","Big Bad Voodoo Daddy, Stevie Wonder, and Gloria Estefan", "Cher", "KISS"],
    correct: "1"
  },
  {
    question: "In 2000, the half-time show featured what superstar/s?",
    choices: ["Phil Collins, Christina Aguilera, Enrique Iglesias, Tina Turner, Toni Braxton, and Edward James Olmos","Pink, Christine Aguilera, Faith Hill and Travis Tritt", "Madonna", "Britney, Aerosmith, NSYNC"],
  	correct: "0" 
  },
];

 function startGame() {
    location.replace("superBowl_93.html")
              }

  function incrementTimer() {
    timer = setTimeout( function () {
      $( '#timer' ).text( timeRemaining );
      if ( timeRemaining <= 0 ) {
        //unanswered
        noAnswer.push( questionObject );
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
    timeRemaining = 20; // in seconds
    incrementTimer();
  }

  function askQuestion() {
    if ( remainingQuestions.length <= 0 ) {
      $( '#asked-question' ).html( questionObject.q );
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

        choice.click(function () {
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



	































