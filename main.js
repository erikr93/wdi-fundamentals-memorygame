var cards = [" queen", " queen", " king", " king"]
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);
flipCard(cardOne);

var cardTwo = cards[1];


var cardThree = cards[2];
cardsInPlay.push(cardThree);
flipCard(cardThree);

var cardFour = cards[3];

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
}  	else {
		alert("Sorry, try again!") 
}}

function flipCard(i) {
	console.log("user flipped" + i);
}