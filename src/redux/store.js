import { applyMiddleware, createStore, compose } from "redux";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import thunk from "redux-thunk";

import firebaseConfig from "../config/firebase";
import rootReducer from "./reducers";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(firebaseConfig),
    reduxFirestore(firebaseConfig)
  )
);

export default store;
