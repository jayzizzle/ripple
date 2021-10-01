import {
  RECEIVED_ALL_TRACKS,
  RECEIVED_TRACK
} from '../../actions/track_actions';
import { RECEIVED_CURRENT_USER } from '../../actions/session_actions';

const tracksReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_ALL_TRACKS:
      return {...oldState, ...action.tracks};
    case RECEIVED_TRACK:
      newState[action.track.id] = action.track;
      return newState;
    case RECEIVED_CURRENT_USER:
      return {...action.currentUser.tracks};
    default:
      return oldState;
  }
};

export default tracksReducer;