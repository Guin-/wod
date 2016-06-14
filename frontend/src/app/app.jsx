import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducers/reducer';
import { actionCreators } from './actions/index';
import WodBox from './components/wodBox';

const store = createStore(reducer);

const onClick = () => {
 store.dispatch(actionCreators.selectRandomWod());
};

const url = 'api/workouts/'

function render(state) {
  ReactDOM.render(<WodBox {...state} onCLick={onClick} />,
                 document.getElementById('react-app'));
}

store.subscribe(() => {
  render(store.getState());
});

fetch(url)
  .then((response) => response.json())
  .then(
    (wods) => {
      store.dispatch(actionCreators.setWods(wods));
  },
    (err) => {
      console.error(url, err.toString());
    }
  );






