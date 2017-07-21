const initState = {
  selected: false
}

const reducers = {
  ['TABBAR_NEW_SELECT']: (state, action) => {
    state.selected = !state.selected;

    return state;
  }
};

const tools = (state = initState, action) => {
  const reducer = reducers[action.type];

  if (reducer) {
    return reducer(state, action);
  }

  return state;
}

export default tools;