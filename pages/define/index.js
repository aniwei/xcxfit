
//index.js
import { connect } from '../../libs/wechat-weapp-redux.js';
import Listview from '../components/listview/index.js';
import Button from '../components/button/index.js';

const defaultConfig = Object.assign({
  onReady () {}
}, Listview, Button);

const mapStateToData = state => {
  const { define } = state;
  const { list, banner, actions, button } = define;

  return {
    list,
    banner,
    actions,
    button
  }
}

const mapDispatchToPage = dispatch => {

  return {
    dispatch
  }
}


Page(
  connect(mapStateToData, mapDispatchToPage)(defaultConfig)
);

console.log(connect(mapStateToData, mapDispatchToPage)(defaultConfig))
