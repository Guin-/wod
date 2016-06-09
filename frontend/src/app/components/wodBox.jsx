import React, { Component, PropTypes } from 'react';
import WodList from './wodList';

/*
const {
  arrayOf,
  string
} = React.PropTypes;
*/

class WodBox extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {
      randomWod,
      wods
    } = this.props

    return (
      <div>
        <div>
          <button onClick={this.props.onClick}>Random Wod</button>
          <div>
            {randomWod ? randomWod: 'I will be a random wod'}
          </div>
        </div>
        <div>
          <h2>Wods</h2>
          <WodList data={wods} />
        </div>
      </div>
    );
  }
}
/*
WodBox.propTypes = {
  randomWod: string
  wods: arrayOf(string)
};

WodBox.defaultProps = {
  randomWod: null,
  wods: []
};
*/
export default WodBox;

