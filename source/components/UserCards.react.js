var React = require('react');
var Grid = require('./Grid.react');
var Pager = require('./Pager.react');
var GridFilter = require('./GridFilter.react');
var Search = require('./Search.react');
var UserCardsStore = require('../stores/usercards_store.js');


var UserCards = React.createClass({

  getInitialState: function() {
    return {
      store: UserCardsStore
    };
  },

  componentDidMount: function() {
    UserCardsStore.bind('change', this.storeChanged);
  },

  componentWillUnmount: function() {
    UserCardsStore.unbind('change', this.storeChanged);
  },

  storeChanged: function() {
    this.setState({
      store: UserCardsStore
    });
  },

  render: function() {
    return  <div>
              <div className="page_title clearfix">
                <h1 role="heading" className="title">Users & Cards</h1>
                <div className="pull-right">
                  <GridFilter store={this.state.store} className="pull-left" />
                  <Search className="pull-left" store={this.state.store} />
                </div>
              </div>
 
              <div className="grid-container">
                Selected = {this.state.store.selectedRow}
                <Grid store={this.state.store}/>
                <Pager store={this.state.store}/>
              </div>
            </div>
  }

});

module.exports = UserCards;