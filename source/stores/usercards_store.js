var AppDispatcher = require('../dispatcher');
var MicroEvent = require('../utils/eventing'); 

var rows = [];

for(var count = 0; count < 1000; count++) {
  rows.push(
    {name: 'Porky', age: 65, score: 7},
    {name: 'Peppa', age: 10, score: 3},
    {name: 'Babe', age: 2, score: 4}
  );
}

var UserCardsStore = {
  storeName: 'usercards',
  pageSize: 10,
  currentPageNumber: 1,
  columns: [
    {key: 0, title: 'Name', field: 'name'},
    {key: 1, title: 'Age', field: 'age'},
    {key: 2, title: 'Score', field: 'score'}
  ],

  rows: rows,

  getRows: function() {
    if (!this.displayRows) {
      this.displayRows = this.rows;
    }
    return this.getCurrentPage();
  },

  search: function(searchString) {
    console.log('performing search... with ', searchString);
    this.displayRows = this.rows.filter(function(row) {
      return row.name.indexOf(searchString) > -1;
    });
  },

  getCurrentPage: function() {
    var start = this.pageSize * (this.currentPageNumber - 1);
    var end = start + this.pageSize;
    return this.displayRows.slice(start, end);
  },

  prev: function() {
    // need to check for upper limit
    if (this.currentPageNumber > 1) {
      this.currentPageNumber = this.currentPageNumber - 1;
    }
  },

  next: function() {
    // need to check for upper limit
    this.currentPageNumber = this.currentPageNumber + 1;
  },

  selectRow: function(row) {
    this.selectedRow = row;
  }
};

MicroEvent.mixin(UserCardsStore);

AppDispatcher.register(function(payload) {
  switch(payload.eventName) {
    case 'search-' + UserCardsStore.storeName:
      UserCardsStore.search(payload.searchString);
      UserCardsStore.trigger('change');
      break;
    case 'pageNext-' + UserCardsStore.storeName:
      UserCardsStore.next();
      UserCardsStore.trigger('change');
      break;
    case 'pagePrev-' + UserCardsStore.storeName:
      UserCardsStore.prev();
      UserCardsStore.trigger('change');
      break;
    case 'selectRow-' + UserCardsStore.storeName:
      UserCardsStore.selectRow(payload.row);
      UserCardsStore.trigger('change');
      break;
    
  } 
}); 

module.exports = UserCardsStore;