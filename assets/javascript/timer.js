///Timer Trivia game

//store your game in an object
  
  var rightAnswers = 0;
  var wrongAnswers = 0;
  var noAnswers = 0;
  var nextIndex = 0;
  var timeRemaining = 0;
  var timer;

     
  var questions = [{  
    question: "SuperBowl XXVII- Pasadena, California  Dallas Cowboys 52, Buffalo Bills 17 The 1993 half-time show ranks as one of the all time best making marching bands a thing of the past! Who performed changing the future of the SuperBowl half-time show?",
    choices: ["Michael Jackson", "Tony Bennett, Patti LaBelle, Miami Sound Machine", "Gloria Estefan, Dorothy Hammill and Brian Boitano", "Whitney Houston"],
    choicesAnswer: "0"
  },
  {
    question: "Who played in the Georgia Dome for the half-time show?",
    choices: ["Bryan Adams, Rod Stewart and Sting","Tim McGraw, Faith Hill, Vince Gill", "Kris Kross, TLC, and Michael Jackson", "Clint Black, Tanya Tucker, Travis Tritt, Naomi and Wynonna Judd"],
    choicesAnswer: "3"
  },
  {
    question: "Name the Superbowl 1999 half-time performer/s?",
    choices: ["Boyz II Men, Smokey Robinson, Queen Latifah, Martha Reeves and The Temptations","Big Bad Voodoo Daddy, Stevie Wonder, and Gloria Estefan", "Cher", "KISS"],
    choicesAnswer: "1"
  },
  {
    question: "In 2000, the half-time show featured what superstar/s?",
    choices: ["Phil Collins, Christina Aguilera, Enrique Iglesias, Tina Turner, Toni Braxton, and Edward James Olmos","Pink, Christine Aguilera, Faith Hill and Travis Tritt", "Madonna", "Britney Spears, Aerosmith, NSYNC"],
  	choicesAnswer: "0" 
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
        noAnswer.push( questions );
        return( 'Time is UP' );
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

// for (var i =0; i <questions.length; i++) {
 //  console.log(questions [i].question);
  //  console.log(questions[i].choices);
  //  var answer= (questions[i].choicesAnswer);
  //  console.log (questions[i].choices [Answer]);
 //}

  function loadNextQuestion() {
        if (questions.length === nextIndex) {
          //game over
        $("#gameOver").load("gameOver.html");
        }
        else {
          startTimer();
          $("#question").html(questions[nextIndex].question)
          $("#answers").html(questions[nextIndex].choices)
        }
    }

  //function askQuestion() {
    //if ( remainingQuestions.length <= 0 ) {
      //$( '#asked-question' ).html( questions.question );
      //clearTimeout(timer);
    //  alert (" you got it correct: " + rightAnswers.length);
      //alert (" you got it wrong: " + wrongAnswers.length);
      //alert (" you have no answer: " + noAnswers.length);
    //} else {
      startTimer();
      $( '#containerForChoiceOptions' ).html( "" );
      question = remainingQuestions.pop();
      var answer = prompt( question.question );
     if ( answer === question.answer )
        rightAnswers.push( question );
     else
        wrongAnswers.push( question );
     
      var choices = question.correct;
      $( '#asked-question' ).html( question.question );
      for ( var i = 0; i < choices.length; i++ ) {
        var choice = $( '<div>' );
        choice.text( choices[ i ] );
        choice.attr( 'id', "choice-" + i );
        choice.attr( 'index', i );
        $( '#containerForChoiceOptions' ).append( choice );

        choice.click(function () {
          //alert("I GUESSED "+ this.innerHTML);
          if ( this.innerHTML === question.correct ) {
            alert( "YAY" );
            rightAnswers.push( question );
            askQuestion();
          } else {
            alert( "boo!" );
            wrongAnswers.push( question );
            askQuestion();
          }
        } );
      }
  askQuestion();



	































