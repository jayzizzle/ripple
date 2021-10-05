import React from 'react';
import Player from '../../player/player';
import Sidebar from '../sidebar';
import PlaylistsRowContainer from './playlists_row_container';

class PlaylistShowAll extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getAllPlaylists();
  }

  render() {
    if (!this.props.playlists) return null;
    const { playlists } = this.props;
    return(
      <>
        <Sidebar />
        <div className='main-window'>
          {/* <PlaylistsRow playlists={playlists} /> */}
          <PlaylistsRowContainer />
        </div>
        <Player />
      </>
    )
  }

}

export default PlaylistShowAll;