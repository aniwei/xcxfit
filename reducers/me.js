const initState = {
  banner: {
    url: 'https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2zrdI1g.jpg'
  }
}

const reducers = {
  ['UPDATE_ME']: (state, action) => {
    state = Object.assign(state, action.me);

    return state;
  }
};



const me = (state = initState, action) => {
  const reducer = reducers[action.type];

  if (reducer) {
    return reducer(state, action);
  }

  return state;
}

export default me;