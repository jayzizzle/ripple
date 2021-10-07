export const getAllTrackLikes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/track_likes'
  })
};

export const postTrackLike = (trackLike) => {
  return $.ajax({
    method: 'POST',
    url: '/api/track_likes',
    data: { trackLike }
  })
};

export const deleteTrackLike = (trackLikeId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/track_likes/${trackLikeId}`
  })
};

export const getAllAlbumLikes = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/album_likes'
  })
};

export const postAlbumLike = (albumLike) => {
  return $.ajax({
    method: 'POST',
    url: '/api/album_likes',
    data: { albumLike }
  })
};

export const deleteAlbumLike = (albumLikeId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/album_likes/${albumLikeId}`
  })
};