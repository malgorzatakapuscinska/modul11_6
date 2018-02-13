// KLASA CARD

function Card(description) {
	var self=this;
	
	this.id = randomString();
	this.description = description;
	this.$element = createCard();
	
	function createCard() {
		 var $card = $('<li>').addClass('card');
		 var $cardDescription = $('<p>').addClass('card-description').text(self.description);
		 var $cardDeleteButton = $('<button>').addClass('card-delete btn');
		 var $cardDeleteSymbol = $('<span  class="glyphicon glyphicon-remove" aria-hidden="true" aria-hidden="true"></span>');
		 
		 $cardDeleteButton.click(function(){
			 self.removeCard();
		 });
		 $cardDeleteButton.append($cardDeleteSymbol);
		 $card.append($cardDeleteButton).append($cardDescription);
		 
		 console.log($card);
		 return $card;
	}
}

Card.prototype = {
		removeCard: function() {
			this.$element.remove();
		}
};