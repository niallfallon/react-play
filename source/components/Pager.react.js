var React = require('react');
var AppDispatcher = require('../dispatcher');

var Pager = React.createClass({

  componentDidMount: function() {
   this.props.store.bind('change', this.storeChanged);
  },

  componentWillUnmount: function() {
    this.props.store.unbind('change', this.storeChanged);
  },

  storeChanged: function() {
    this.forceUpdate();
  },

  previous: function() {
    AppDispatcher.dispatch({
      eventName: 'pagePrev-' + this.props.store.storeName
    });
  },

  next: function() {
    AppDispatcher.dispatch({
      eventName: 'pageNext-' + this.props.store.storeName
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
                  <li>Page no. {this.props.store.currentPageNumber}</li>
                </ul>
              </div> 
            </div>
  }
});

module.exports = Pager;