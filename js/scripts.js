$(function(){

//funckcja losująca 10 znaków z tablicy 61 znaków i składająca je w jeden string
	
function randomString(){
	var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ',
		str = '';
			
	for (var i=0; i<10; i++){
		str +=chars[Math.floor(Math.random() * chars.length)];
	}
	return str;
}

//Math - obiekt globalny
//floor - metoda zaokrąglająca liczby w dół
//random - metoda losująca liczbę z zakresu <0,1)

//KLASA KOLUMN

var board = {
		name: 'Kanban Board',
		addColumn: function(column) {
			this.$element.append(column.$element);
			initSortable();
		},

		$element: $('#board .column-container')
};

$('.create-column')
.click(function(){
	var name = prompt('Enter a column name', 'Column\'\s name');
	console.log(name);
	if(name != null){
		var column = new Column(name);
		board.addColumn(column);}
	else {
		return false;
	}
});

function Column(name) {
	var self = this;
	
	this.id = randomString();
	this.name = name;
	this.$element = createColumn();


function createColumn (){
	var $column=$('<div>').addClass('column');
	var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
	var $columnCardList = $('<ul>').addClass('column-card-list');
	var $columnDeleteButton = $('<button>').addClass('btn-delete btn');
	var $columnDeleteSymbol = $('<span  class="glyphicon glyphicon-remove" aria-hidden="true" aria-hidden="true"></span>');
	var $columnAddCard = $('<button>').addClass('add-card btn btn-success btn-sm').text('Add a Card');
	
	$columnDeleteButton.click(function(){
		self.removeColumn();
	});
	
	$columnAddCard.click(function(event){
		event.preventDefault();
		var cardName = prompt('Enter the name of the card');
		if(name != null){
		self.addCard(new Card(cardName));
		}else{
			return false;
		}
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

function initSortable() {
    $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: '.card-placeholder',
      dropOnEmpty: true
    }).disableSelection();
  }


//CREATING COLUMNS
var todoColumn = new Column('To do');
var doingColumn = new Column('Doing');
var doneColumn = new Column('Done');

// ADDING COLUMNS TO THE BOARD
board.addColumn(todoColumn);
board.addColumn(doingColumn);
board.addColumn(doneColumn);

// CREATING CARDS
var card1 = new Card('New task');
var card2 = new Card('Create kanban boards');

// ADDING CARDS TO COLUMNS
todoColumn.addCard(card1);
doingColumn.addCard(card2);


});
