import React, { Component, PropTypes } from 'react';

const propTypes = {};
const defaultProps = {};


class Wod extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="wod">
        <h1 className="wodName">
          {this.props.name}
        </h1>
        {this.props.children}
      </div>
    );
  }
}

Wod.propTypes = propTypes;
Wod.defaultProps = defaultProps;

export default Wod;

