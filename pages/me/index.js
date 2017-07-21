
//index.js
import { connect } from '../../libs/wechat-weapp-redux.js';

const defaultConfig = Object.assign({
  onReady () {}
});

const mapStateToData = state => {
  const { tools, me } = state;
  const { banner } = me;

  return {
    tools: tools.list,
    url: banner.url
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
