import React from 'react';
import { shallow, mount, render } from 'enzyme';
import GroupOfButtons from '../src/groupOfButtons.jsx';

describe('groupOfButtons', function() {
  context('When we have two statefulButton', function() {
    let component = null;

    beforeEach(function() {
      component = mount(<GroupOfButtons />);
    });

    context('Clicking on the first statefulButton', function() {
      // let firstButton = component.find('.firstButton');
      // let secondButton = component.find('.secondButton');

      // beforeEach(function functionName() {
      //   component.find('.firstButton').simulate('click');
      // });

      it('should see that the firstButton value changes', function() {
        console.log(component);
        expect(component.find('.firstButton').state().value).to.be.equal('Please wait.s.');
      });
      //
      // it('secondButton value shouldnt change', function() {
      //   expect(secondButton.state().value).to.be.equal('Please.');
      // });
    });
  });
});
