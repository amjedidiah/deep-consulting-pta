// Module import
import {combineReducers} from 'redux';
import {loadingBarReducer} from 'react-redux-loading-bar';

// Reducer imports
import dummy from './dummy';

// Export combineReducers
export default combineReducers({
  dummy,
  loadingBar: loadingBarReducer,
});
