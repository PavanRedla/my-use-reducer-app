const appReducer = (state, action) => {
  switch (action.type) {
    case "NAME_UPDATE":
      return {
        ...state,
        name: action.payload,
      };
    case "LOC_UPDATE":
      return {
        ...state,
        loc: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
