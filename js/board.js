var board = {
		name: 'Kanban Board',
		addColumn: function(column) {
			this.$element.append(column.$element);
			initSortable();
		},

		$element: $('.column-container')
};

$('.create-column').click(function(){
	var name = prompt('Enter a column name', 'Column\'\s name');
	if(name){
		var column = new Column(name); // tworzymy nową instancję klasy Column
		board.addColumn(column);
	}else if(name == "") {
		
		var column = new Column('Untitled'); 
		board.addColumn(column); //modyfikujemy właściwość obiektu board - dodajemy utworzoną wczesniej kolumnę do elementu o klasie .column-container
	}
});

function initSortable() {
    $('.column-card-list').sortable({
      connectWith: '.column-card-list',
      placeholder: '.card-placeholder',
      dropOnEmpty: true
    }).disableSelection();
  }