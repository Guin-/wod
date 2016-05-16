import React from 'react';
import ReactDOM from 'react-dom';
import WodList from './components/wodList';

const wodData = [
  {id: 1, name: 'wod one', description: 'this is wod one'},
  {id: 2, name: 'wod two', description: 'this is wod two'}
];

ReactDOM.render(<WodList url='api/workouts' />, document.getElementById('react-app'))
