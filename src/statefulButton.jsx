import React from 'react';
import ReactDOM from 'react-dom';

module.exports = React.createClass({

  propTypes: {
    type: React.PropTypes.string,
    class: React.PropTypes.string,
    id: React.PropTypes.string,
    dataID: React.PropTypes.number,
    onClick: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      type: 'button',
      class: 'btn-success',
      id: '',
      dataID: 0
    };
  },

  getInitialState() {
    return {
      value: 'Login'
    };
  },

  onButtonCLick: function() {
    this.setState({
        value: 'Please wait..'
    });
  },

  className: function() {
    return this.props.class + ' btn';
  },

  render: function() {
    return (
      <button
        className={this.className()}
        type={this.props.type}
        id={this.props.id}
        data-foo={this.props.dataID}
        onClick={this.onButtonCLick}
      >
      {this.state.value}
      </button>
    );
  }
});
