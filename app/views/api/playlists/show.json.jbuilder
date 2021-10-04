json.set! 'playlists' do
  json.set! @playlist.id do
    json.id playlist.id
    json.title playlist.title
    json.numTracks playlist.tracks.length
  end
end