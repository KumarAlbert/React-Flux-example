var AppDispatcher = require('../dispatcher/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/appConstants.js');
var assign = require('object-assign');

console.log("store area");
var data = {};
var CHANGE_EVENT = 'change';

function getData() {
  data ={
    name:"albert"
  }
  return data;
}

var AppStore = assign ({},EventEmitter.prototype,{
  getData:function () {
    return data;
  },
  emitChange: function() {
      this.emit(CHANGE_EVENT);
  },
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
  }
});
AppDispatcher.register(function (payload) {
  var action = payload.action;
  switch (action.actionType) {
    case AppConstants.GET_DATA:
      getData();
      break;
    default:
      return true;
  }
  AppStore.emitChange();
  return true;
})

module.exports = AppStore;
