var moment = require('moment');

var App = function(){
	this.version = 1;
};

App.prototype.check = function(){
	console.log(true);
};

App.prototype.humanTime = function(){
	return 1;
};

module.exports = App;