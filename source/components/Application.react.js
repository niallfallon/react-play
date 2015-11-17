var React = require('react');

var Menu = require('./Menu.react');

var App = React.createClass({

  getInitialState: function() {
    console.log('initial state ...');
    return { 
      text: this.props.text
    };
  },

  componentWillMount: function() {
    console.log('mounting ...');
  },

  componentWillReceiveProps: function() {
    console.log('receiving props ...');
  },

  shouldComponentUpdate: function() {
    console.log('Should component update ...');
    return true;
  },

  didClick: function() {
    console.log('clicked');
    this.setState({

    });
  },

  render: function() {
    console.log('rendering application ...');
    
    return  <div>
              <div className="v-container page_header" id="page_header">
                <div className="v-content head-content">
                  <div className="logo_secondary">
                     
                  </div>
                </div>
              </div>

              <Menu></Menu>
              <div className="main-content">
                {this.props.children}
              </div>
            </div>
  },

  componentDidUpdate: function() {
    console.log('did update!');
  },

  componentDidMount: function() {
    console.log('mounted ...');
  }

});


module.exports = App;