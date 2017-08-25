var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
		console.log(cardsInPlay[0])
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		}
 		else {
		alert("Sorry, try again!");
		}
	}
}

var flipCard = function() {
	//console.log(this);
	var cardId = this.getAttribute("id");
	this.src = cards[cardId].cardImage;
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement("img");
		newCard.src = 'images/back.png';
		newCard.id = i;
		newCard.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(newCard);
  }
}

createBoard();