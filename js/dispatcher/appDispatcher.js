var Dispatcher = require('flux').Dispatcher;

var AppDispatcher = new Dispatcher();
console.log("dispatcher area");
AppDispatcher.handleAction = function (action) {
  console.log(action);
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = AppDispatcher;
