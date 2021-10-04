import { connect } from 'react-redux';
import { getArtist } from '../../actions/artist_actions';
import ArtistShow from './artist_show';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => ({
  artist: state.entities.artists[ownProps.match.params.artistId],
  albums: state.entities.albums
});

const mDTP = dispatch => ({
  getArtist: (artistId) => dispatch(getArtist(artistId))
});

export default withRouter(connect(mSTP, mDTP)(ArtistShow));