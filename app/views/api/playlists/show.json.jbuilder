tracks = @playlist.tracks.includes(:album, :artist)

json.extract! @playlist, :id, :title, :user_id
json.numTracks tracks.length
json.set! 'tracks' do
  tracks.each do |track|
    json.set! track.id do
      json.extract! track, :id, :title, :seconds
      json.artistName track.artist.artist_name
      json.albumTitle track.album.title
    end
  end
end