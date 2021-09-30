import { 
  RECEIVED_ALL_ARTISTS, 
  RECEIVED_ARTIST 
} from '../../actions/artist_actions';

const artistsReducer = (oldState={}, action) => {
  Object.freeze(oldState);
  const newState = Object.assign({}, oldState);
  switch (action.type) {
    case RECEIVED_ALL_ARTISTS:
      return {...oldState, ...action.artists};
    case RECEIVED_ARTIST:
      newState[action.artist.id] = action.artist;
      return newState;
    default:
      return oldState;
  }
};

export default artistsReducer;