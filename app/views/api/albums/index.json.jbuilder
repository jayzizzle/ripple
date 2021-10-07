@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :artist_id, :category, :year, :is_explicit, :artist_name
    if album.cover.attached?
      json.coverUrl url_for(album.cover)
    else
      json.coverUrl ''
    end
  end
end