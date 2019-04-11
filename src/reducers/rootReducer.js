import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import jobReducer from "./jobReducer";
import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  main: mainReducer,
  job: jobReducer,
  auth: authReducer,
  firebase: firebaseReducer
});

export default rootReducer;
