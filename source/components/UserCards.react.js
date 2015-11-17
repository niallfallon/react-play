var React = require('react');
var Grid = require('./Grid.react');
var GridFilter = require('./GridFilter.react');
var Search = require('./Search.react');
var UserCardsStore = require('../stores/usercards_store.js');
var UserCards = React.createClass({

  render: function() {
    return  <div>
              <div className="page_title clearfix">
                <h1 role="heading" className="title">Users & Cards</h1>
                <div className="pull-right">
                  <GridFilter store={UserCardsStore} className="pull-left" />
                  <Search className="pull-left" store={UserCardsStore} />
                </div>
              </div>
 
              <div className="grid-container">
                <Grid store={UserCardsStore}/>
              </div>
            </div>
  }

});

module.exports = UserCards;