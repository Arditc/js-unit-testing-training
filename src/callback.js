var request = require('superagent');

var App = function(){
	this.version = 1;
};

App.prototype.getData = function (callback) {
  request.get('https://api.github.com/repos/vmg/redcarpet/issues?state=closed')
    .end(callback);
};

App.prototype.storesData = function (callback) {
	callback();
};



module.exports = App;
