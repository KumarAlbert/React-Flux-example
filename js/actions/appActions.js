var AppDispatcher = require('../dispatcher/appDispatcher.js');
var AppConstants = require('../constants/appConstants.js');
console.log("action area");
console.log(AppConstants.GET_DATA);
var AppActions = {
  getData:function () {
    AppDispatcher.handleAction({
      actionType: AppConstants.GET_DATA
    })
  }
};


module.exports = AppActions;
