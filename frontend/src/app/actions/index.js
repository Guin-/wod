export const actionTypes = {
  SELECT_RANDOM_WOD: 'SELECT_RANDOM_WOD',
  SET_WODS: 'SET_WODS'
};

export const actionCreators = {
  selectRandomWod: () => ({
    type: actionTypes.SELECT_RANDOM_WOD
  }),
  setWods: (wods) => ({
    type: actionTypes.SET_WODS,
    wods
  })
};

