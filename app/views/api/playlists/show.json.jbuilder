tracks = @playlist.tracks.includes(:album, :artist)

json.extract! @playlist, :id, :title, :user_id
json.numTracks tracks.length
json.set! 'tracks' do
  tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :seconds
      json.artistId track.artist_id
      json.artistName track.artist.artist_name
      json.albumId track.album_id
      json.albumTitle track.album.title
    end
  end
end

# @playlist_tracks.each do |playlist_track|
#   json.extract! playlist_track, :id, :playlist_id, :track_id
# end
json.set! 'tracks' do
  @playlist_tracks.each do |track|
    json.set! track.track_id do
      json.playlistTrackId track.id
    end
  end
end