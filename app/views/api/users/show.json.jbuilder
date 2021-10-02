json.extract! @user, :id, :username

json.info do
  json.extract! @user, :id, :username
end

# json.set! 'albums' do
#   @user.albums_liked.each do |album|
#     json.set! album.id do
#       json.extract! album, :id, :title, :artist_id
#     end
#   end
# end

# json.set! 'artists' do
#   @user.album_artists_liked.each do |artist|
#     json.set! artist.id do
#        json.extract! artist, :id, :artist_name
#      end
#   end
# end

# json.set! 'tracks' do
#   @user.tracks_liked.each do |track|
#     json.set! track.id do
#       json.extract! track, :id, :title
#       json.artistName track.artist.artist_name
#     end
#   end
# end

# json.set! 'playlists' do
#   @user.playlists.each do |playlist|
#     json.set! playlist.id do
#       json.extract! playlist, :id, :title
#       json.tracks playlist.tracks, :track_id
#     end
#   end
# end