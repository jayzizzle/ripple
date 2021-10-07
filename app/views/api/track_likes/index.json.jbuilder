if !!@track_likes

  @track_likes.each do |track_like|
    json.set! track_like.id do
      json.extract! track_like, :id, :track_id
    end
  end

end