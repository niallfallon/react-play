var React = require('react');
var AppDispatcher = require('../dispatcher');
var StoreMixin = require('../mixins/store');

var Pager = React.createClass({
  mixins: [StoreMixin],
  
  previous: function() {
    AppDispatcher.dispatch({
      eventName: 'pagePrev-' + this.state.store.storeName
    });
  },

  next: function() {
    AppDispatcher.dispatch({
      eventName: 'pageNext-' + this.state.store.storeName
    });
  },

  render: function() {
    return  <div>
              <div className="grid_pagination">
                <ul>
                  <li>
                    <button className="default_Prev pg-button pag_prev_btn" onClick={this.previous} id="previousPage">pager.prev</button>
                  </li>
                  <li><button className="default_Next pg-button pag_next_btn" onClick={this.next} id="nextPage" >pager.next</button></li>
                  <li>Page no. {this.state.store.currentPageNumber}</li>
                </ul>
              </div> 
            </div>
  }
});

module.exports = Pager;