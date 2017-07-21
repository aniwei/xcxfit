const initState = {
  list: [
    { key: 'map', icon: 'icon-map', text: '地图' },
    { key: 'vote', icon: 'icon-vote', text: '投票' },
    { key: 'lottery', icon: 'icon-lottery', text: '抽奖' },
    { key: 'test', icon: 'icon-test', text: '测试' },
    { key: 'question', icon: 'icon-question', text: '问卷' },
    { key: 'signup', icon: 'icon-signup', text: '报名' },
    { key: 'signin', icon: 'icon-signin', text: '签到' },
    { key: 'visiting', icon: 'icon-visiting', text: '扫名片' },
    { key: 'seller', icon: 'icon-seller', text: '商家名片' }
  ]
}

const reducers = {
  ['UPDATE_TOOLS']: (state, action) => {
    state.list = Object.assign(action.tools);

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