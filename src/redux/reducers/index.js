import { combineReducers } from "redux";

import authReducer from "./authReducer";
import ideaReducer from "./ideaReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  idea: ideaReducer
});

export default rootReducer;
