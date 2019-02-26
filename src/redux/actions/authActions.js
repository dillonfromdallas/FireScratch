export const createUser = (userData, history) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    const { email, password, username } = userData;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            email: email,
            username: username
          });
      })
      .then(() => dispatch({ type: "SIGNUP_USER" }))
      .catch(err => dispatch({ type: "GET_ERRORS", payload: err }));
  };
};

export const loginUser = (userData, history) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const { email, password } = userData;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        dispatch({ type: "LOGIN_USER" });
      })
      .catch(err => {
        dispatch({ type: "GET_ERRORS", payload: err });
      });
  };
};

export const logoutUser = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => dispatch({ type: "LOGOUT_USER" }))
      .catch(err => {
        dispatch({ type: "GET_ERRORS", payload: err });
      });
  };
};
