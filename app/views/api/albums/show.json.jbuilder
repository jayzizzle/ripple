json.extract! @album, :id, :title, :artist_id, :category, :year, :is_explicit
json.artistName @album.artist.artist_name
json.tracks @album.tracks