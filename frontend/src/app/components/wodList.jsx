import React, { Component, PropTypes } from 'react';
import Wod from './wod';

const propTypes = { url: PropTypes.string };
const defaultProps = {};


class WodList extends Component {
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
    console.log(this.state);
  }

  render () {
    return (
      <div>
        <div>Wods:
          {this.state.data.children}
        </div>
      </div>
    );
  }

}

WodList.propTypes = propTypes;
WodList.defaultProps = defaultProps;

export default WodList
