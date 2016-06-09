import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import WodBox from './components/wodBox';

const actionTypes = {
  SELECT_RANDOM_WOD: 'SELECT_RANDOM_WOD',
  SET_WODS: 'SET_WODS'
};

const actionCreators = {
  selectRandomWod: () => ({
    type: actionTypes.SELECT_RANDOM_WOD
  }),
  setWods: (wods) => ({
    type: actionTypes.SET_WODS,
    wods
  })
};

const defaultState = {
  randomWod: null,
  wods: []
};

const reducer = (state = defaultState, action) => {
  const {
    randomWod,
    type,
    wods
  } = action;

  switch (type) {
    case actionTypes.SELECT_RANDOM_WOD:
      return Object.assign({}, state, {
        randomWod: state.wods[Math.floor(Math.random() * state.wods.length)].name
    });

    case actionTypes.SET_WODS:
      return Object.assign({}, state, {
        wods
    });
  }

  return state;
};

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






