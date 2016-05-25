import React, { Component, PropTypes } from 'react';
import WodList from './wodList';
import RandomWod from './RandomWod';

const propTypes = { url: PropTypes.string };
const defaultProps = {};


class WodBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  loadWorkouts() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ data: data }))
      .catch(err => console.error(this.props.url, err.toString()))
  }

  componentDidMount() {
    this.loadWorkouts()
    console.log(this.state.data);
  }

  render () {
    return (
      <div>
        <div className='random-wod'>
          <RandomWod data={this.state.data} />
        </div>
        <div className='wod-box'>
          <h2>Wods</h2>
          <WodList data={this.state.data} />
        </div>
      </div>
    );
  }
}

WodBox.propTypes = propTypes;
WodBox.defaultProps = defaultProps;

export default WodBox;

