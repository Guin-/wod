import React, { Component, PropTypes } from 'react';
import WodList from './wodList';

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
      <div className='wod-box'>
        <h2>Wods</h2>
        <WodList data={this.state.data} />
      </div>
    );
  }
}

WodBox.propTypes = propTypes;
WodBox.defaultProps = defaultProps;

export default WodBox;

