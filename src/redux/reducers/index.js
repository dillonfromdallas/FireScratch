import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./authReducer";
import ideaReducer from "./ideaReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  idea: ideaReducer,
  firestore: firestoreReducer
});

export default rootReducer;
