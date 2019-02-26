export const createIdea = (idea, history) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
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
        dispatch(history.push("/"));
      })
      .catch(err => {
        dispatch({ type: "GET_ERRORS", err });
      });
  };
};
