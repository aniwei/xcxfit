
//index.js
import { connect } from '../../libs/wechat-weapp-redux.js';
import Nav from '../components/nav/index.js';

const defaultConfig = Object.assign({
  onReady () {}
}, Nav);

const mapStateToData = state => {
  const { tools, tabbar } = state;
  const { selected } = tabbar;

  return {
    nav: {
      selected,
      tools: tools.list
    }
  }
}

const mapDispatchToPage = dispatch => {

  return {
    dispatch
  }
}


const page = Page(
  connect(mapStateToData, mapDispatchToPage)(defaultConfig)
);
