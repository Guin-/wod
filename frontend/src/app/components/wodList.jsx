import React, { Component, PropTypes } from 'react';
import Wod from './wod';

const propTypes = { data: PropTypes.array.isRequired };
const defaultProps = {};


class WodList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    let wodNodes = this.props.data.map((wod, id) => {
      return (
        <Wod name={wod.name} key={id}>
          {wod.description}
        </Wod>
      )
    });
    return (
      <div className='wod-list'>
        {wodNodes}
       </div>
    );
  }

}

WodList.propTypes = propTypes;
WodList.defaultProps = defaultProps;

export default WodList
