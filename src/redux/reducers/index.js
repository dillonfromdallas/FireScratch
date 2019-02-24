import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import ideaReducer from "./ideaReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  idea: ideaReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
