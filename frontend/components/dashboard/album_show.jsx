import React from 'react';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbum(this.props.match.params.albumId)
  }

  render() {
    if (!this.props.album) return null;
    const { album } = this.props;
    const tracks = Object.values(album.tracks);
    console.log(tracks);
    return(
      <div className='main-window'>
        <div className='flex-row-start'>
          <img className='album-show' src={album.coverUrl} />
          <div className='flex-col-start'>
            <p>{album.title}</p>
            <p>{album.artistName}</p>
            <p>{tracks.length} Track</p>
            <p>{album.year} &nbsp;
              {album.isExplicit ?  <span className='gray-border'>Explicit</span> : null}
            </p>
          </div>
        </div>
        <div className='flex-row-start'>
          <div className='flex-col-start'>
            <ul>
              {tracks.map(track => (
                <li key={track.id}>
                  <ul className='track-row-info'>
                    <li>{track.num}</li>
                    <li>{track.title}</li>
                    <li>{album.artistName}</li>
                    <li>{track.seconds}</li>
                    <li>
                      <button>+</button>&nbsp;<button>Heart</button>
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