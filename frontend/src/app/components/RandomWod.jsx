import React, { Component, PropTypes } from 'react';

const propTypes = {};
const defaultProps = {};


class RandomWod extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  getRandomWod() {
    let randWodIndex = Math.floor(Math.random() * this.props.data.length);
    let randWod = this.props.data[randWodIndex];
    console.log(randWod);
  }

  handleClick() {
    console.log('button clicked');
    this.getRandomWod();
  }

  render () {
    return (
      <div>
        <div className="wod-button">
          <button onClick={this.handleClick}> Random Wod </button>
        </div>
        <div>
          I will be a random wod
        </div>
      </div>
    );
  }
}

RandomWod.propTypes = propTypes;
RandomWod.defaultProps = defaultProps;

export default RandomWod;

