import { actionTypes, actionCreators } from '../actions/index.js'

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
        randomWod: state.wods[Math.floor(Math.random() * state.wods.length)]
    });

    case actionTypes.SET_WODS:
      return Object.assign({}, state, {
        wods
    });
  }

  return state;
};

export default reducer
