if !!@album_likes

  @album_likes.each do |album_like|
    json.set! album_like.id do
      json.extract! album_like, :id, :album_id
    end
  end

end