import React, { PropTypes } from 'react';
import Wod from './wod';

const propTypes = {};
const defaultProps = {};


class WodList extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let wodlist = this.props.data.map(function(wod) {
      return (
        <Wod name={wod.name} key={wod.id}>
          {wod.description}
        </Wod>
      );
    });
    return (
      <div className="wodList">
      <h1>Wod List</h1>
          {wodlist}
      </div>
    );
  }
}

WodList.propTypes = propTypes;
WodList.defaultProps = defaultProps;

export default WodList;

