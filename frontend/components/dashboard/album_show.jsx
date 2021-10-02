import React from 'react';
import { getAlbum } from '../../actions/album_actions';

class AlbumShow extends React.Component {
  // componentDidMount() {
  //   console.log(this.props.match.params)
  //   this.props.getAlbum(this.props.match.params.id)
  // }
  render() {
    return(
      <div className='main-window'>
        <h1>HELLO</h1>
      </div>
    )
  }
}

export default AlbumShow;