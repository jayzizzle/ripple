import { connect } from 'react-redux';
import { getUser } from '../../actions/session_actions';
import { getAllArtists } from '../../actions/artist_actions';
import ArtistIndex from './artist_index';

const mSTP = (state, ownProps) => ({
  userId: state.session.id,
  artists: Object.values(state.entities.artists)
}); 

const mDTP = dispatch => ({
  getUser: (userId) => dispatch(getUser(userId)),
  getAllArtists: () => dispatch(getAllArtists()),
});

export default connect(mSTP, mDTP)(ArtistIndex);