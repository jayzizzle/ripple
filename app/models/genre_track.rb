class GenreTrack < ApplicationRecord

  validates :genre_id, :track_id, presence: true

end
