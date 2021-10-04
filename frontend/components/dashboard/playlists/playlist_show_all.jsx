import React from 'react';
import Player from '../../player/player';
import Sidebar from '../sidebar';
import PlaylistsRow from './playlists_row';

class PlaylistShowAll extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getUser(this.props.currentUserId);
  }

  render() {
    if (!this.props.playlists) return null;
    const { playlists } = this.props;
    return(
      <>
        <Sidebar />
        <div className='main-window'>
          <PlaylistsRow playlists={playlists} />
        </div>
        <Player />
      </>
    )
  }

}

export default PlaylistShowAll;