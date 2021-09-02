//for image 1
var randomNumber1 = (Math.floor(Math.random() * 6)) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png"; //random image of dice nice :)

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - dice6.png


var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

//for image2
var randomNumber2 = (Math.floor(Math.random() * 6)) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //random image of dice nice :)

var randomImageSource2 = "images/" + randomDiceImage2; // images/dice1.png - dice6.png


var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


//PLayer 1 Wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}

//Player 2 Wins
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins!!";
}

//Nobody Wins - Draw
else if (randomNumber1==randomNumber2)
{
  document.querySelector("h1").innerHTML="Its a Draw. Roll Again.";
}
