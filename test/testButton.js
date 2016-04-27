import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Button from '../src/Button';

describe('Button', function() {
  describe('when nothing is passed through to the component',function() {
    const props = {
            type: 'button',
            class: 'btn-success',
            id: '',
            dataID: 0,
            value: 'button'
    };
    let component = null;
    beforeEach(function() {
      component = mount(<Button />);
    });

    context('when the Button is called without any props', function() {
      it('return the defaultProps', function() {
        expect(component.props().class).to.be.equal('btn-success');
      });
    });

  });
});
