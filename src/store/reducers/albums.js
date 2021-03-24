import * as actionTypes from '../actions/actionTypes.js';

const albumsReducer = (state = {}, action) => {
  const { albums } = action;
  switch (action.type) {
    case actionTypes.SET_ALBUMS:
      return albums;
    case actionTypes.ADD_ALBUMS:
      return {
        ...state,
        next: albums.next,
        items: [...state.items, ...albums.items]
      };
    default:
      return state;
  }
};
export default albumsReducer;