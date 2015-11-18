var React = require('react');
var AppDispatcher = require('../dispatcher');
var StoreMixin = require('../mixins/store');

var Grid = React.createClass({
  // props = store
  mixins: [StoreMixin],

  render: function() {
    var _this = this;

    return  <div className="grid_container">
              <table className="grid_table">
                <thead>
                  <tr>
                    <th>
                      <input type="button" className="btn_trans_toggle" />
                    </th>
                    <th>
                      <input type="checkbox" /> 
                    </th>

                    {this.state.store.columns.map(function(col) {
                      return <th key={col.key}><span>{col.title}</span></th>
                    })}

                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.store.getRows().map(function(row) {
                      return <GridRow key={row.field} store={_this.state.store} row={row} columns={_this.state.store.columns} />
                    })
                  }
                </tbody>
              </table>
            </div>
  }

});

var GridRow = React.createClass({
  // expect props:
  // - row 
  // - columns

  onSelect: function() {
    AppDispatcher.dispatch({
      eventName: 'selectRow-' + this.props.store.storeName,
      row: this.props.row 
    });
  },

  render: function() {
    var _this = this;
    return  <tr onClick={this.onSelect}>
              <td></td>
              <td></td>
              {
                this.props.columns.map(function(column) {
                  return <GridCell column={column} row={_this.props.row}/>
                })
              }
            </tr>
  }
});

var GridCell = React.createClass({
  // expect props:
  // - row
  // - column

  render: function() {
    var value = this.props.row[this.props.column.field];
    return <td>{value}</td>
  }

});


module.exports = Grid;