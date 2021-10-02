import { connect } from 'react-redux';
import { getAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';
import { withRouter } from 'react-router';

const mSTP = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId]
});

const mDTP = dispatch => ({
  getAlbum: (albumId) => dispatch(getAlbum(albumId))
});

export default withRouter(connect(mSTP, mDTP)(AlbumShow));