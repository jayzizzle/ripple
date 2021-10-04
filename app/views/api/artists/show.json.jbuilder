json.set! 'artist' do
  json.extract! @artist, :id, :artist_name, :bio
  json.photoUrl url_for(@artist.photo)
  json.albumIds @artist.albums.ids
end

json.set! 'albums' do 
  @artist.albums.each do |album|
    json.set! album.id do
      json.extract! album, :id, :title, :artist_id, :category, :year, :is_explicit
      json.coverUrl url_for(album.cover)
    end
  end
end