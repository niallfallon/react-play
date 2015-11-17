var React = require('react');

var Grid = React.createClass({
  // props = collection
  propTypes: {
    //collection: React.PropTypes.object
  },

  componentDidMount: function() {
   this.props.store.bind('change', this.storeChanged);
  },

  componentWillUnmount: function() {
    this.props.store.unbind('change', this.storeChanged);
  },

  storeChanged: function() {
    this.forceUpdate();
  },

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

                    {this.props.store.columns.map(function(col) {
                      return <th key={col.key}><span>{col.title}</span></th>
                    })}

                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.store.getRows().map(function(row) {
                      return <GridRow key={row.field} row={row} columns={_this.props.store.columns}/>
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

  render: function() {
    var _this = this;
    return  <tr>
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


        /*  <td ng-if="outputfooter" class="toggle_cell" id="{{'trans_btn_' + row.transId}}">
            <input ng-if="row.hasChildren" id="{{'toggle_' + row.transId}}" type="button" aria-expanded="false" ng-click="toggleChildren(row, $event)" class="btn_trans_toggle" ng-class="{isOpen:row.isOpen}" title="{{::toggleRowTitle | translate}}" value="{{row.childrenCount}}">
          </td>

          <td ng-if="multiselect" class="chbox_cell">
            <input type="checkbox" ng-click="selectRow('1', row, $event)" ng-model="row.selected" title="{{::selectRowTitle | translate}}" id= "{{'chbox_' + ($index + 1)}}" />
            <span class="hidden_label"><label for="{{'chbox_' + ($index + 1)}}" translate>{{selectRowTitle}}</label></span>
          </td>*/

module.exports = Grid;