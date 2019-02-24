export const createUser = (userData, history) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firestore
      .collection("users")
      .add({
        ...userData
      })
      .then(() => {
        dispatch(history.push("/"));
      })
      .catch(err => {
        dispatch({ type: "GET_ERRORS", err });
      });
  };
};
