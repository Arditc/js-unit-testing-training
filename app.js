var moment = require('moment');

var App = function(){
	this.version = 1;
};

App.prototype.noParams = function(){
	return true;
};

App.prototype.oneParam = function(param){
	return param * 2;
};

App.prototype.branching = function(param){
	if(param > 5){
		return true;
	}
	return false;
};

App.prototype.withCallback = function(param, callback){
	return callback(param * 2);
}

App.prototype.withTime = function(){
	var date = new moment();
	return date.format('%y');
};

module.exports = App;