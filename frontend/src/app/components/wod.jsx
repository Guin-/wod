import React, { PropTypes } from 'react';

const propTypes = {};
const defaultProps = {};


class Wod extends React.Component {
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

