@albums.each do |album|
  json.set! album.id do
    json.extract! album, :id, :title, :artist_id, :category, :year, :is_explicit
    json.artistName album.artist.artist_name
    json.coverUrl url_for(album.cover)
  end
end

# THIS ERRORS ON LOCAL

# @albums.each do |album|
#  if album.cover.attached?
#  json.set! album.id do
#    json.extract! album, :id, :title, :artist_id, :category, :year, :is_explicit, :artist_name
#      json.coverUrl url_for(album.cover)
#    else
#      json.coverUrl ''
#    end
#  end
#end