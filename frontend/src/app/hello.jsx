import React, { PropTypes }from 'react';

const propTypes = {};
const defaultProps = {};

class Hello extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="hello" />
    );
  }
}

Hello.propTypes = propTypes;
Hello.defaultProps = defaultProps;

export default Hello;

