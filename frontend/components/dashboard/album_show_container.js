import { connect } from 'react-redux';
import { getAlbum } from '../../actions/album_actions';
import AlbumShow from './album_show';
import { withRouter } from 'react-router';
import { postPlaylistTrack } from '../../actions/playlist_track_actions';

const mSTP = (state, ownProps) => ({
  album: state.entities.albums[ownProps.match.params.albumId],
  currentUserId: state.session.id,
  playlists: Object.values(state.entities.playlists)
});

const mDTP = dispatch => ({
  getAlbum: (albumId) => dispatch(getAlbum(albumId)),
  getAllPlaylists: () => dispatch(getAllPlaylists()),
  postPlaylistTrack: (playlistTrack) => dispatch(postPlaylistTrack(playlistTrack))
});

export default withRouter(connect(mSTP, mDTP)(AlbumShow));