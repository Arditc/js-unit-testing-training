import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Foo from '../src/Foo';
const expect = global.chai.expect;
const sinon = global.sinon;

describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).is('.foo')).to.be.true()
  });

  // it("contains spec with an expectation", function() {
  //   expect(shallow(<Foo />).is('.foo')).to.be(true);
  // });
  //
  // it("contains spec with an expectation", function() {
  //   expect(mount(<Foo />).find('.foo').length).to.be(1);
  // });
  //
  // it("can run an expectation with render", function() {
  //   expect(render(<Foo />).find('.foo').length).to.be(1);
  // });
});
