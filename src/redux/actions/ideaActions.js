export const createIdea = idea => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firestore
      .collection("ideas")
      .add({
        ...idea,
        userFirstName: "Tempo",
        userLastName: "Rary",
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_IDEA", idea });
      })
      .catch(err => {
        dispatch({ type: "GET_ERRORS", err });
      });
  };
};
