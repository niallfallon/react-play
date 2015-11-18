
var storeMixin = {
  getInitialState: function() {
    return {
      store: this.props.store
    };
  },

  componentDidMount: function() {
   this.props.store.bind('change', this.storeChanged);
  },

  componentWillUnmount: function() {
    this.props.store.unbind('change', this.storeChanged);
  },

  storeChanged: function() {
    this.setState({
      store: this.props.store
    });
  }
};

module.exports = storeMixin;