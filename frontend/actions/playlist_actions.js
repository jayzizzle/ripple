import * as APIUtil from '../util/playlist_api_util';

export const RECEIVED_ALL_PLAYLISTS = 'RECEIVED_ALL_PLAYLISTS';
export const RECEIVED_PLAYLIST = 'RECEIVED_PLAYLIST';

export const receivedAllPlaylists = playlists => ({
  type: RECEIVED_ALL_PLAYLISTS,
  playlists
});

export const receivedPlaylist = playlist => ({
  type: RECEIVED_PLAYLIST,
  playlist
});

export const getAllPlaylists = () => dispatch => (
  APIUtil.getAllPlaylists().then(playlists => (
    dispatch(receivedAllPlaylists(playlists))
  ))
);

export const getPlaylist = (playlistId) => dispatch => (
  APIUtil.getPlaylist(playlistId).then(playlist => (
    dispatch(receivedPlaylist(playlist))
  ))
);