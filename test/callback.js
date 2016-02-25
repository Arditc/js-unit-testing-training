var expect = chai.expect;
var sinon = require('sinon');
var request = require('superagent');
var App = require('../src/callback.js');

describe('Callback', function(){
	it('has been loaded', function(){
		expect(App).to.be.an.instanceOf(Function);
	});

	describe('constructor', function(){
    var instance;
    beforeEach(function () {
      instance = new App();
    });

		it('creates the correct instance', function(){
			expect(instance).to.be.an.instanceOf(App);
		});
	});

  describe('getData', function () {
		var callback;

		beforeEach(function () {
			callback = sinon.stub();
			sinon.stub(request, 'get').returns({
				end: sinon.stub().callsArg(0)
			});
			var instance = new App();
			instance.getData(callback);
		});

		afterEach(function () {
			request.get.restore();
		});

		it('should return true', function () {
			expect(callback).to.have.been.called;
		});

	  // var instance;
    // var stub;
    // var callback;
    // beforeEach(function() {
		//
    // //  stub = sinon.stub();
		// 	sinon.stub(request, 'get')
    //   instance = new App();
    //   instance.getData(stub);
    // });
		//
		// afterEach(function () {
		// 	request.get.restore();
		// });
		// //
		// it('expects request.get to have been called with correct data', function () {
		// 	expect(request.get).to.have.been.called;
		// });
		// //
    // // it('runs the callback after getting the data from github', function () {
    // //   expect(stub).to.have.been.called;
    // // });

  });

});