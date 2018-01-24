$(function(){
	
	function randomString() {
	    var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
	    var str = '';
	    for (var i = 0; i < 10; i++) {
	        str += chars[Math.floor(Math.random() * chars.length)];
	    }
	    return str;
	}
	
	function Column(name){
		
		var self = this;
		
		this.ID = randomString();
		this.name = name;
		this.$element = createColumn();
		
		    function createColumn(){
			this.$column = $('<div>').addClass('column');
			this.$columnTitle = $('<h2>').addClass('column-titlw').text(self.name);
			this.$columnCardList = $('<ul>').addClass('column-card-list');
			this.$columnDelete = $('<button>').addClass('btn-delete').text('x');
			this.$columnAddCard = $('button').addClass('btn-add-card').text('Add a card');
			
			$columnDelete.click(function(){
				self.removeColumn();
			});
			$columnAddCard.click(function(){
				self.addCard(new Card(prompt("Enter the name of the card")));
			});
			
			$column.append($columnTitle)
	        .append($columnDelete)
	        .append($columnAddCard)
	        .append($columnCardList);
			
			
			return $column;
			
		}
	}
	
});