import { applyMiddleware, createStore, compose } from "redux";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import thunk from "redux-thunk";

import firebaseConfig from "../config/firebase";
import rootReducer from "./reducers";

firebase.initializeApp(firebaseConfig);
firebase.firestore();

firebase.firestore().settings({ timestampsInSnapshots: true });

const store = createStore(
  rootReducer,
  compose(
    reduxFirestore(firebase),
    reactReduxFirebase(firebase, {
      userProfile: "users",
      userFirestoreForProfile: true
    }),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);

export default store;
