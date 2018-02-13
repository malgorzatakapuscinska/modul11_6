//klasa Column

function Column(name) {
	var self = this;
	
	this.id = randomString();
	this.name = name;
	this.$element = createColumn();


	function createColumn (){
		
	//tworzymy poszczególne elementy kolumny:
		
	var $column=$('<div>').addClass('column');
	var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
	var $columnCardList = $('<ul>').addClass('column-card-list');
	var $columnDeleteButton = $('<button>').addClass('btn-delete btn');
	var $columnDeleteSymbol = $('<span  class="glyphicon glyphicon-remove" aria-hidden="true" aria-hidden="true"></span>');
	var $columnAddCard = $('<button>').addClass('add-card btn btn-success btn-sm').text('Add a Card');
	
	//ustawiamy nasłuchiwanie zdarzeń
	
	$columnDeleteButton.click(function(){
		self.removeColumn();
	});
	
	$columnAddCard.click(function(event){
		
		var cardName = prompt('Enter the name of the card', 'Card\'\s name');
		if(cardName){
		self.addCard(new Card(cardName));
		}else if(cardName == ""){
			console.log(cardName);
			self.addCard(new Card('Umtitled'));}
	});
	$columnDeleteButton.append($columnDeleteSymbol);
	$column.append($columnTitle).append($columnDeleteButton).append($columnAddCard).append($columnCardList);
	return $column;
}

}

Column.prototype = {
	addCard: function(card) {
		this.$element.children('ul').append(card.$element);
	},
	removeColumn: function() {
		this.$element.remove();
	}
};