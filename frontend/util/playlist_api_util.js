export const getAllPlaylists = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/playlists'
  })
};

export const getPlaylist = (playlistId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/playlists/${playlistId}`
  })
};