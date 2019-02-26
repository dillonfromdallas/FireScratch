export const createUser = (userData, history) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const { email, password, username } = userData;
    firebase
      .createUser({ email, password }, { email, username })
      .then(() => dispatch(history.push("/")))
      .catch(err => dispatch({ type: "GET_ERRORS", payload: err }));
  };
};

export const loginUser = (userData, history) => {
  return (dispatch, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const { email, password } = userData;
    firebase
      .login({ email, password })
      .then(() => {
        dispatch(history.push("/"));
      })
      .catch(err => {
        dispatch({ type: "GET_ERRORS", err });
      });
  };
};
