export const createIdea = (idea, history) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const { uid } = getState().firebase.auth;
    firestore
      .collection("ideas")
      .add({
        ...idea,
        authorName: profile.username,
        authorID: uid,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_IDEA" });
      })
      .catch(err => {
        dispatch({ type: "GET_ERRORS", payload: err });
      });
  };
};

export const deleteIdea = (idea, history) => {
  return (dispatch, getState, { getFirestore }) => {
    const firestore = getFirestore();
    const { uid } = getState().firebase.auth;
    firestore
      .collection("ideas")
      .doc(idea)
      .delete()
      .then(() => {
        dispatch({ type: "DELETE_IDEA" });
      })
      .then(() => history.push("/"))
      .catch(err => {
        dispatch({ type: "GET_ERRORS", payload: err });
      });
  };
};
