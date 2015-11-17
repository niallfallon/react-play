var React = require('react');

var GridFilter = React.createClass({

  openFilterDialog: function() {
    console.log('open filter');
  },

  render: function() {
    return  <button type="button" className="btn_grey btn_icon btn_icon_filter" onClick={this.openFilterDialog} title="Filters">
              Filters
            </button>
  }
});

module.exports = GridFilter;