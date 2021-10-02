import React from 'react';

class Main extends React.Component {

  componentDidMount() {
    this.props.getUser(this.props.userId);
    this.props.getAllAlbums();
  }

  render() {
    if (!this.props) return null;
    const { albums } = this.props;
    return (
      <div className='main-window'>
          <ul className='data-display'>
            {albums.map(album => (
              <li className='data-box' key={album.id}>
                <img width='150px' height='150px' src={album.coverUrl} />
                <h5>{album.title}</h5>
                <h6>{album.artistName}</h6>
                <p>{album.year} &nbsp;
                  {album.isExplicit ?  <span className='gray-border'>Explicit</span> : null}
                </p>
              </li>
            ))}
          </ul>
        </div>
    )
  }
}

export default Main;