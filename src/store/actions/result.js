import * as actionTypes from './actionTypes.js';
import { get } from '../../components/Utils/api.js';

export const setAlbums = (albums) => ({
    type: actionTypes.SET_ALBUMS,
    albums
});
export const addAlbums = (albums) => ({
    type: actionTypes.ADD_ALBUMS,
    albums
});
export const setArtists = (artists) => ({
    type: actionTypes.SET_ARTISTS,
    artists
});
export const addArtists = (artists) => ({
    type: actionTypes.ADD_ARTISTS,
    artists
});
export const setPlayList = (playlists) => ({
    type: actionTypes.SET_PLAYLIST,
    playlists
});
export const addPlaylist = (playlists) => ({
    type: actionTypes.ADD_PLAYLIST,
    playlists
});

export const initiateGetResult = (searchTerm) => {
    return async (dispatch) => {
        try {
            const API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
                searchTerm
            )}&type=album,playlist,artist`;
            const result = await get(API_URL);
            console.log(result);
            const { albums, artists, playlists } = result;
            dispatch(setAlbums(albums));
            dispatch(setArtists(artists));
            return dispatch(setPlayList(playlists));
        } catch (error) {
            console.log('error', error);
        }
    };
};