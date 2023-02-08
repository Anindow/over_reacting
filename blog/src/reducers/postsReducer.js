/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
