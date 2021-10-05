import { connect } from "react-redux";
import PlaylistsRow from "./playlists_row";
import { getAllPlaylists } from "../../../actions/playlist_actions";

const mSTP = state => {
  return({
    playlists: Object.values(state.entities.playlists),
    userId: state.session.id
  })
};

const mDTP = dispatch => ({
  getAllPlaylists: () => dispatch(getAllPlaylists())
});

export default connect(mSTP, mDTP)(PlaylistsRow);