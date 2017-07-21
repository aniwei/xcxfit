//app.js
import { Provider } from './libs/wechat-weapp-redux.js';
import constants from './constants/index.js';
import configureStore from './configureStore.js';

const getStorageSync = (createApplication) => {
  let value;

  const request = () => {
    let isShow = false;

    const timer = setTimeout(() => {
      wx.showLoading({
        title: '正在加载...'
      });

      isShow = true;
    }, 500);

    return wx.request(
      Object.assign({
        success (resp) {
          const res = resp.data;

          clearTimeout(timer);

          if (isShow) {
            setTimeout(() => {
              wx.hideLoading();
            }, 1000)
          }

          if (res.code === 0) {
            value = {
              version: constants.verison,
              state: res.data
            };

            wx.setStorage({
              key: constants.key,
              value
            });

            createApplication(value);
          }
        },
        error () {
          wx.showToast({
            icon: 'fail',
            title: '加载失败，请联系我们'
          });
        }
      }, constants.api.model)
    );
  }

  try {
    value = wx.getStorageSync(constants.key);
  } catch (e) {}

  if (value) {
    if (value.version === constants.version) {
      createApplication(value);
    } else {
      return request();
    }
  }

  request();
}

const userLogin = () => {
  wx.login({
    success (res) {
      console.log(res)
    },
    fail () {}
  });
}

const userInfo = () => {
  wx.getUserInfo({
    success () {},
    fail () {}
  })
}

App(Provider(configureStore())({
  onLaunch: function () {
    const { dispatch } = this.store;

    getStorageSync(function createApplication (value) {
      const { tools, define } = value.state;

      dispatch({
        type: 'UPDATE_TOOLS',
        tools
      });

      dispatch({
        type: 'UPDATE_DEFINE',
        define
      })
    });
    
    //userLogin();
  }
}))


