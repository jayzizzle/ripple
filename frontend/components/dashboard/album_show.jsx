import React from 'react';
import {convertDuration} from '../../util/helper_util';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.albumId)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.albumId !== prevProps.match.params.albumId) {
      this.props.getAlbum(this.props.match.params.albumId);
    }
  }

  render() {
    if (!this.props.album || !this.props.album.tracks) return null;
    const { album } = this.props;
    const tracks = Object.values(album.tracks);
    return(
      <div className='main-window'>
        <div className='flex-row-start'>
          <img className='album-show' src={album.coverUrl} />
          <div className='flex-col-start'>
            <p className='display-title'>{album.title}</p>
            <p className='display-name'>{album.artistName}</p>
            <p className='display-length'>{tracks.length} Tracks</p>
            <p className='display-year'>{album.year} &nbsp;
              {album.isExplicit ? <span className='gray-border'>Explicit</span> : null}
            </p>
          </div>
        </div>
        <div className='flex-row-start'>
          <button>Play</button>&nbsp;<button>Shuffle</button>
        </div>
        <div className='flex-row-start'>
          <div className='flex-col-start'>
            <ul className='track-list-display'>
              {tracks.map(track => (
                <li key={track.id}>
                  <ul className='track-row-info'>
                    <li>{track.num}</li>
                    <li>{track.title}</li>
                    <li>{album.artistName}</li>
                    <li>{convertDuration(track.seconds)}</li>
                    <li>
                      <button>+</button>&nbsp;
                      <button><i className="far fa-heart"></i></button>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumShow;