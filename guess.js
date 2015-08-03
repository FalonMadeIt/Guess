var $humanVsComputerBtn = document.getElementById('game1').getElementsByTagName('button')[0];

var randomNumber = Math.floor(Math.random() * 10);

// GAME ONE

$humanVsComputerBtn.addEventListener('click', function () {
	var $gameElement = this.parentNode;
	var $userInput = $gameElement.getElementsByTagName('input')[0]
	var $responseElement = $gameElement.getElementsByTagName('h3')[0]
	var guess = parseInt( $userInput.value);
 	return evaluateGuess(guess, $responseElement);
});

function evaluateGuess(guess, $responseElement){	 
	 if( guess=== randomNumber){
      $responseElement.textContent ="WINNER!";
  }
  else if( guess< randomNumber){
    $responseElement.textContent = "Your guess is too Low!";
  }
  else if(guess>randomNumber){  $responseElement.textContent = "Your Number is too High!";

  }
  else {
    $responseElement.textContent = "Please enter a number between 1 and 10";
  }
 }

// GAME TWO

// var $ComputerVsHumanBtn = document.getElementById('game2').getElementsByTagName('button')[0];

// $ComputerVsHumanBtn.addEventListener('click', function () {
// 	var $gameElement = this.parentNode;
// 	var $userInput = $gameElement.getElementsByTagName('input')[0]
// 	var $responseElement = $gameElement.getElementsByTagName('h3')[0]
// 	var guess = parseInt( $userInput.value);
//  	return evaluateGuess(guess, $responseElement);
// });

// function evaluateGuess(guess, $responseElement){	 
// 	 if( guess === randomNumber){
//       $responseElement.textContent ="The Computer Guessed your Number! :)";
//   }
//   else if( guess !== randomNumber){
//     $responseElement.textContent = "The Computer Guessed Wrong! :( ";
//   }

 // }




// GAME THREE

var $ComputerVsComputer = document.getElementById('game3')        
  .getElementsByTagName('button')[0];

var result = document.getElementById("game3").getElementsByTagName("h3");

$ComputerVsComputer.addEventListener('click', function () {

  var upper = 100;
  var randomDigit = getRandomNumber(upper); 
  var guess;
  var attempts = 0;

	function getRandomNumber(upper){
	  return Math.floor(Math.random()* upper) + 1;
	}
	
	while(guess !== randomDigit){
	  guess = getRandomNumber(upper);
	  attempts += 1;
	}
  
  document.getElementById("test").innerHTML = "The random number was  " + guess +  ",  It took the Computer " + attempts + " attempts to guess this number! ";
  
});