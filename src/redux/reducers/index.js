import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import ideaReducer from "./ideaReducer";
import errorReducer from "./errorReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  idea: ideaReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  errors: errorReducer,
  profile: profileReducer
});

export default rootReducer;
