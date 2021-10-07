import React from 'react';

class TrackLikeButton extends React.Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    return(
      <button className='button-small'>
        <i className="far fa-heart"></i>
      </button>
    )
  }
}

export default TrackLikeButton;