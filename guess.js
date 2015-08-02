
var guess = document.querySelector('input[type = number]');
var btn = document.querySelector('button');
var randomNumber = Math.floor(Math.random() * 10);
var response = document.querySelector('h2');
btn.addEventListener('click', function () {
 var number = parseInt(guess.value);
  if( number === randomNumber){
      response.textContent ="WINNER!";
  }
  else if( number < randomNumber){
    response.textContent = "Your Number is too Low!";
  }
  else if(number >randomNumber){  response.textContent = "Your Number is too High!";

  }
  else {
    response.textContent = "Please enter a number between 1 and 10";
  }


});
