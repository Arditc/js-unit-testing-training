var Promise = require('promise');
var request = require('superagent-promise')(require('superagent'), Promise);


var App = function(){
	this.version = 1;
};

App.prototype.getData = function () {
  var result;

  request('GET', 'https://api.github.com/repos/vmg/redcarpet/issues?state=closed')
    .end()
    .then(function onResult(res){
      result = res;
    }, function onError(err) {
      result = err;
    });

};


module.exports = App;
