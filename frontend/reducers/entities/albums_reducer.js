import {
  RECEIVED_ALL_ALBUMS,
  RECEIVED_ALBUM
} from '../../actions/album_actions';
import { RECEIVED_ARTIST } from '../../actions/artist_actions';
import { RECEIVED_CURRENT_USER } from '../../actions/session_actions';

const albumsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_ALL_ALBUMS:
      return {...oldState, ...action.albums};
    case RECEIVED_ALBUM:
      newState[action.album.id] = action.album;
      return newState;
    case RECEIVED_ARTIST:
      return {...oldState, ...action.artist.albums};
    case RECEIVED_CURRENT_USER:
      return {...oldState, ...action.currentUser.albums};
    default:
      return oldState;
  }
};

export default albumsReducer;