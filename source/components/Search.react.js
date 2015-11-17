var React = require('react');
var AppDispatcher = require('../dispatcher');
var Search = React.createClass({

  getInitialState: function() {
    return {
      searchValue: ""
    };
  },

  searchStringDidChange: function(event) {
    this.setState({value: event.target.value});
    
    AppDispatcher.dispatch({
      eventName: 'search-' + this.props.store.storeName,
      searchString: event.target.value
    });
  },

  render: function() { 
    var value = this.state.value;

    return  <div className="clearfix pull-right">
              <div className="find_container">
                <div id="find_input_container">
                  <span className="hidden_label"><label for="find_input" translate>button.search</label></span>
                  <input type="text" id="find_input" value={value} onChange={this.searchStringDidChange} className="search_input" name="find_input" aria-invalid="false" />
                </div>
              </div>
            </div> 
  }
});

module.exports = Search;