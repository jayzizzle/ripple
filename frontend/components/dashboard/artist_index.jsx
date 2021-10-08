import React from 'react';
import ArtistsRow from './artists_row';

class ArtistIndex extends React.Component {

  componentDidMount() {
    this.props.getUser(this.props.userId);
    this.props.getAllArtists();
  }

  render() {
    if (!this.props) return null;
    const { artists } = this.props;
    return (
      <div className='main-window'>
        <ArtistsRow artists={artists} />
        <div className='end-clear'></div>
      </div>
    )
  }
}

export default ArtistIndex;