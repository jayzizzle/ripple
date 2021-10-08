@favorite_albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :artist_id, :category, :year, :is_explicit, :artist_name
    json.coverUrl url_for(album.cover)
  end
end