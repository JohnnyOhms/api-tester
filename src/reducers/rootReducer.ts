import { combineReducers } from "redux";
import mainReducer from "./mainReducer";

const rootReducer = combineReducers({
  mainState: mainReducer,
});

export default rootReducer;
