///Timer Trivia game
//making sure the DOM is ready
$(document).ready(function(){
///Theme = Know your meme


//store your game in an object
var questionsAnswers = [{
	mainTimer:
 // // A user will have 45 seconds to select the correct answer
		var timebegin = 0;
		var timerIsOn = 0;
		var seconds;

		function myFirstTimer () {
			document.getElementById('time').innerHTML = timebegin;
			timebegin = timebegin + 1;
			seconds = setTimeout(function(){myFirstTimer()}, 1000);
		}

		function startCount (){
			if (!timerIsOn) {
				timerIsOn = 1;
				myFirstTimer();
			}
		},

	//index 0 
	timer: this.startCount ();,
	question: "How are you?",
	choices: ["good", "bad", "great"],
	image: "http://placehold.it/350x150",
	answer: 3 
	},

{
	//index 1
	timer: "tiehere",
	question: "What did you learn?",
	choices: ["nothing", "all the code", "meh, some things"],
	image: "http://placehold.it/350x150",
	answer: 2

}];

for (var i = 0; i < questions.length; i++) {
	questions[i]

	//if userchoice === answer
		//display that you guessed correct
		//add a point to your correct answer array
		//go to next question
	//else 
		//display you guessed incorrect
		//add a point to your loss counter
		//go to next question


}

console.log(questions[0].question);
console.log(questions[0].answer);

function makePic(){
document.getElementById("photo").innerHTML = "<img src ='" +questions[0].image +"'>";
}
makePic();

// ///vars I know I need
// var meme = ["images/salt.jpeg", ""];
// var timer = 


// //we will click a "start game" button to begin

// // A timer will begin counting from 0 and display a question with 4 answers
// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.




// if a user selects the correct answer(within the time limit) they get a point and it goes onto the next question

// otherwise they get a loss point and it goes onto the next question

//each time it tells you if you got the correct answer or not 

// if no selection is made in 45 seconds they ger a point under "unanswered" and it goes onto the next question

// The timer restarts when they get to the next page and a new question loads

// after they go through all of the questoins their score is displayed saying how many they got correct and incorrect 
});