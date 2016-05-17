import React from 'react';
import ReactDOM from 'react-dom';
import WodBox from './components/wodBox';

const wodData = [
  {id: 1, name: 'wod one', description: 'this is wod one'},
  {id: 2, name: 'wod two', description: 'this is wod two'}
];

ReactDOM.render(<WodBox url='api/workouts' />,
                document.getElementById('react-app'))
