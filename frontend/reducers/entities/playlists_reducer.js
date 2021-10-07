import {
  RECEIVED_ALL_PLAYLISTS,
  RECEIVED_PLAYLIST,
  REMOVED_PLAYLIST
} from '../../actions/playlist_actions';
import { RECEIVED_CURRENT_USER } from '../../actions/session_actions';

const playlistsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_PLAYLIST:
      newState[action.playlist.id] = action.playlist;
      return newState;
    case RECEIVED_ALL_PLAYLISTS:
      return action.playlists;
    case REMOVED_PLAYLIST:
      delete newState[action.playlistId];
      return newState;
    default:
      return oldState;
  }
};

export default playlistsReducer;