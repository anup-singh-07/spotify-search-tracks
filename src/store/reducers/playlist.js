import * as actionTypes from '../actions/actionTypes.js';

const playlistReducer = (state = {}, action) => {
  const { playlists } = action;
  switch (action.type) {
    case actionTypes.SET_PLAYLIST:
      return playlists;
    case actionTypes.ADD_PLAYLIST:
      return {
        ...state,
        next: playlists.next,
        items: [...state.items, ...playlists.items]
      };
    default:
      return state;
  }
};
export default playlistReducer;