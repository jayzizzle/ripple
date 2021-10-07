import {
  RECEIVED_ALL_TRACK_LIKES,
  RECEIVED_TRACK_LIKE,
  REMOVED_TRACK_LIKE
} from '../../actions/like_actions';

const likedTracksReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_ALL_TRACK_LIKES:
      return {...oldState, ...action.trackLikes}
    case RECEIVED_TRACK_LIKE:
      newState[action.trackLike.id] = action.trackLike;
      return newState;
    case REMOVED_TRACK_LIKE:
      delete newState[action.trackLikeId];
      return newState;
    default:
      return oldState;
  }
};

export default likedTracksReducer;