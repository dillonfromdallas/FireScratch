import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import ideaReducer from "./ideaReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  idea: ideaReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  errors: errorReducer
});

export default rootReducer;
