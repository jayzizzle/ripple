@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :artist_id, :category, :year, :is_explicit, :artist_name
    
     
    # json.artistName album.artist.artist_name
    # json.numTracks album.tracks.length
  end
end