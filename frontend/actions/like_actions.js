import * as APIUtil from '../util/like_api_util';

export const RECEIVED_ALL_TRACK_LIKES = 'RECEIVED_ALL_TRACK_LIKES';
export const RECEIVED_TRACK_LIKE = 'RECEIVED_TRACK_LIKE';
export const REMOVED_TRACK_LIKE = 'REMOVED_TRACK_LIKE';

export const RECEIVED_ALL_ALBUM_LIKES = 'RECEIVED_ALL_ALBUM_LIKES';
export const RECEIVED_ALBUM_LIKE = 'RECEIVED_ALBUM_LIKE';
export const REMOVED_ALBUM_LIKE = 'REMOVED_ALBUM_LIKE';

export const receivedAllTrackLikes = trackLikes => ({
  type: RECEIVED_ALL_TRACK_LIKES,
  trackLikes
});

export const receivedTrackLike = trackLike => ({
  type: RECEIVED_TRACK_LIKE,
  trackLike
});

export const removedTrackLike = trackLikeId => ({
  type: REMOVED_TRACK_LIKE,
  trackLikeId
});

export const receivedAllAlbumLikes = albumLikes => ({
  type: RECEIVED_ALL_ALBUM_LIKES,
  albumLikes
});

export const receivedAlbumLike = albumLike => ({
  type: RECEIVED_ALBUM_LIKE,
  albumLike
});

export const removedAlbumLike = albumLikeId => ({
  type: REMOVED_ALBUM_LIKE,
  albumLikeId
});

export const getAllTrackLikes = () => dispatch => (
  APIUtil.getAllTrackLikes().then(trackLikes => (
    dispatch(receivedAllTrackLikes(trackLikes))
  ))
);

export const postTrackLike = (trackLike) => dispatch => (
  APIUtil.postTrackLike(trackLike).then(trackLike => (
    dispatch(receivedTrackLike(trackLike))
  ))
);

export const deleteTrackLike = (trackLikeId) => dispatch => (
  APIUtil.deleteTrackLike(trackLikeId).then(() => (
    dispatch(removedTrackLike(trackLikeId))
  ))
);

export const getAllAlbumLikes = () => dispatch => (
  APIUtil.getAllAlbumLikes().then(albumLikes => (
    dispatch(receivedAllAlbumLikes(albumLikes))
  ))
);

export const postAlbumLike = (albumLike) => dispatch => (
  APIUtil.postAlbumLike(albumLike).then(albumLike => (
    dispatch(receivedAlbumLike(albumLike))
  ))
);

export const deleteAlbumLike = (albumLikeId) => dispatch => (
  APIUtil.deleteAlbumLike(albumLikeId).then(() => (
    dispatch(removedAlbumLike(albumLikeId))
  ))
);