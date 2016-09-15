var React = require('react');
var AppAction = require("../actions/appActions");
var AppStore = require('../store/appStore');

console.log("Component area");

console.log("app store method get",AppStore.getData());

function getAppState() {
  var information = {
    data : AppStore.getData()
  };
  return information;
}


var Component = React.createClass({
  getInitialState: function () {
    return getAppState();
  },
  componentDidMount: function () {
      AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
      AppStore.removeChangeListener(this._onChange);
    },

  getData: function () {
    AppAction.getData();
  },
  render:function () {
    console.log(this.state,"statae");
    return (
      <h1 onClick={this.getData}>Click IT  {this.state.data.name}</h1>
    )
  },
  _onChange: function () {
  this.setState(getAppState());
}
});

module.exports = Component;
