import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from '../src/Button.jsx';

describe('Button', function() {
  describe('when nothing is passed through to the component', function() {
    let component = null;

    context('when the Button is called without any props', function() {
      const props = {
        type: 'button',
        class: 'btn-success',
        id: '',
        dataID: 0,
        value: 'button'
      };

      beforeEach(function() {
        component = mount(<Button />);
      });

      it('return the defaultProps', function() {
        expect(component.props().class).to.be.equal('btn-success');
      });
    });

    context('when we pass in our own props through', function() {
      const props = {
        type: 'button',
        class: 'btn-info',
        id: 'info',
        dataID: 2,
        value: 'Info Button'
      };

      beforeEach(function() {
        component = mount(<Button {...props}/>)
      });

      it('component should have the new props', function() {
        expect(component.props().class).to.not.be.equal('btn-success');
        expect(component.props().class).to.be.equal('btn-info');
        expect(component.props().id).to.be.equal('info');
        expect(component.props().dataID).to.be.equal(2);
        expect(component.props().value).to.be.equal('Info Button');
      });
    });
  });
});
