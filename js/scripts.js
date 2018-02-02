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
	var name = prompt('Enter a column name');
	
	var column = new Column(name);
  	board.addColumn(column);
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
	var $columnDelete = $('<button>').addClass('btn-delete').text('x');
	var $columnAddCard = $('<button>').addClass('add-card').text('Add a Card');
	
	$columnDelete.click(function(){
		self.removeColumn();
	});
	$columnAddCard.click(function(event){
		event.preventDefault();
		self.addCard(new Card(prompt('Enter the name of the card')));
	});
	$column.append($columnTitle).append($columnDelete).append($columnAddCard).append($columnCardList);
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
		 var $cardDelete = $('<button>').addClass('btn-delete').text('x');
		 
		 console.log($card);
		 console.log($cardDescription);
		 console.log($cardDelete);
		 $cardDelete.click(function(){
			 self.removeCard();
		 });
		 
		 $card.append($cardDelete).append($cardDescription);
		 
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
