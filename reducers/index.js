import { combineReducers } from '../libs/redux.js';
import tools from './tools';
import tabbar from './tabbar';
import define from './define';
import me from './me';

export default combineReducers({
  tools,
  tabbar,
  define,
  me
});
