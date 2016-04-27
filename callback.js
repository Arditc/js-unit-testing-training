var request = require('superagent');

var App = function(){
	this.version = 1;
};

App.prototype.getData = function (callback) {
  request.get('https://api.github.com/repos/vmg/redcarpet/issues?state=closed')
    .end(callback);
};

App.prototype.storesData = function (callback) {
	var data = {
		username: 'hungrygeek'
	};
	var a = this.writeToDb(data, function(err, success) {
		if(err) return false;
		return 'the data has been updated!';
	});
};

App.prototype.writeToDb = function (data, cb) {
	if(Math.round(Math.random())) {
		cb(null, true);
	}
	cb('false', null);
};



module.exports = App;
