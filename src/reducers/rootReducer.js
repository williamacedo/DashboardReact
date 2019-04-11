import { combineReducers } from "redux";
import mainReducer from "./mainReducer";
import jobReducer from "./jobReducer";
import authReducer from './authReducer';

const rootReducer = combineReducers({
  main: mainReducer,
  job: jobReducer,
  auth: authReducer
});

export default rootReducer;
