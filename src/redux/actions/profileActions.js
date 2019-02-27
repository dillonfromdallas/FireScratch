export const getProfile = (uid, history) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(uid)
      .get()
      .then(user => dispatch({ type: "GET_PROFILE", payload: user.data() }))
      .then(() => history.push(`/user/${uid}`))
      .catch(err => dispatch({ type: "GET_ERRORS", payload: err }));
  };
};
