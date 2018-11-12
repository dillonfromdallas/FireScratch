export const createIdea = idea => {
  return (dispatch, getState) => {
    // Make async call to db
    dispatch({ type: "CREATE_IDEA", idea });
  };
};
