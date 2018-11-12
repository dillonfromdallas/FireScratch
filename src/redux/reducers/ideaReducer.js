const initialState = {
  ideas: [
    { id: "1", title: "idea 1", body: "blah blah blah" },
    { id: "2", title: "idea 2", body: "blah blah blah" },
    { id: "3", title: "idea 3", body: "blah blah blah" }
  ]
};

const ideaReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_IDEA":
      console.log("Test Created", action.idea);
  }
  return state;
};

export default ideaReducer;
