if !!@album_likes

  @album_likes.each do |album_like|
    json.set! album_like.id do
      json.extract! :id, :album_id
    end
  end

end