json.extract! @user, :id, :username
json.artistsFollowed @user.artists_followed, :id, :artist_name
json.albumsLiked @user.albums_liked do |album|
  json.albumId album.id
  json.title album.title
  json.artist album.artist.artist_name
end
json.tracksLiked @user.tracks_liked do |track|
  json.trackId track.id
  json.title track.title
  json.artist track.artist.artist_name
end
json.playlists @user.playlists do |playlist|
  json.playlistId playlist.id
  json.title playlist.title
  json.tracks playlist.tracks, :track_id
end
