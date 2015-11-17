
var Collection = function(columns, rows) {
  this.columns = columns;
  
  this.columns = [
    {key: 0, title: 'Name', field: 'name'},
    {key: 1, title: 'Age', field: 'age'},
    {key: 2, title: 'Score', field: 'score'}
  ];

  this.rows = [
    {name: 'Porky', age: 65, score: 7},
    {name: 'Peppa', age: 10, score: 3},
    {name: 'Babe', age: 2, score: 4},
    {name: 'Daffy', age: 34, score: 4},
    {name: 'Roger', age: 22, score: 6},
    {name: 'Porky', age: 65, score: 7},
    {name: 'Peppa', age: 10, score: 3},
    {name: 'Babe', age: 2, score: 4},
    {name: 'Daffy', age: 34, score: 4},
    {name: 'Roger', age: 22, score: 6},
    {name: 'Porky', age: 65, score: 7},
    {name: 'Peppa', age: 10, score: 3},
    {name: 'Babe', age: 2, score: 4},
    {name: 'Daffy', age: 34, score: 4},
    {name: 'Roger', age: 22, score: 6}
  ];

  this.search = function(searchString) {
    this.displayRows = this.rows.filter(function(row) {
      return row.name.indexOf(searchString) > -1;
    });
  };

  this.displayRows = this.rows;

};

module.exports = Collection;