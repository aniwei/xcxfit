const actions = {
  ITEM_SELECT: 'DEFINE_ITEM_SELECT',
  LIST_SUBMIT: 'DEFINE_LIST_SUBMIT'
}

const initState = {
  button: {
    text: '提交需求',
    type: 'primary',
    state: ''
  },

  actions,

  banner: {
    url: 'https://res.wx.qq.com/a/wx_fed/webwx/res/static/img/2zrdI1g.jpg'
  },

  list: [
    {
      key: 'general',
      type: 'checkbox',
      title: '常规小程序',
      list: [
        { key: 'common', name: '基础底层平台', value: '不包括新增功能、云平台安全、第三方平台费用', selected: true },
        { key: 'site', name: '微官网', value: '文章、栏目管理等，适用于企业、产品展示', selected: true },
        { key: 'catering', name: '微餐饮', value: '商品管理、在线点餐、适用于餐饮业' },
        { key: 'shop', name: '微商店', value: '商品管理、在线点餐、适用于餐饮业' }
      ]
    }, {
      key: 'extension',
      title: '常规小程序',
      list: [
        { key: 'common', name: '基础底层平台', value: '不包括新增功能、云平台安全、第三方平台费用', selected: true },
        { key: 'site', name: '微官网', value: '文章、栏目管理等，适用于企业、产品展示', selected: true },
        { key: 'catering', name: '微餐饮', value: '商品管理、在线点餐、适用于餐饮业' },
        { key: 'shop', name: '微商店', value: '商品管理、在线点餐、适用于餐饮业' }
      ]
    }
  ]
}

const reducers = {
  ['UPDATE_DEFINE']: (state, action) => {
    state = Object.assign(state, action.define);
    const { button } = state;

    if (button.loading) {
      state.state = 'loading';
    }

    if (button.disable) {
      state.state = disable;
    }

    return state;
  },

  [actions.ITEM_SELECT]: (state, action) => {
    state = Object.assign(state, action.define);
    const { list } = state;
    const { itemid, listid } = action;

    const li = list[listid];

    if (li) {
      const l = li.list[itemid];

      if (l) {
        l.selected = !l.selected;
      }
    }

    return state;
  },

  [actions.LIST_SUBMIT]: (state, action) => {
    const { button } = state;
    button.state = button.state === '' ? 'loading' : '';
    button.loading = button.state === 'loading';

    if (button.loading) {
      button.text = '正在提交需求，请稍候片刻'
    }

    return state;
  }
};



const define = (state = initState, action) => {
  const reducer = reducers[action.type];

  if (reducer) {
    return reducer(state, action);
  }

  return state;
}

export default define;