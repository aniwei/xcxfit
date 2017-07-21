import {createStore, compose} from './libs/redux.js';
import reducer from './reducers/index.js';



function configureStore() {
  return createStore(reducer);
}

 export default configureStore;
