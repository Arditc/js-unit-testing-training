var expect = chai.expect;
var App = require('../src/app.js');

describe('App', function(){
	
	it('has been loaded', function(){
		expect(App).to.be.an.instanceOf(Function);
	});
	
	describe('constructor', function(){

		it('creates the correct instance', function(){
			expect(App).to.be.an.instanceOf(App);
		});
		
	})
	
});