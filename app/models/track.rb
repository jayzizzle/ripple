class Track < ApplicationRecord

  validates :title, :artist_id, :album_id, :num, :seconds, presence: true
  validates :is_interlude, inclusion: { in: [true, false] }

  has_many :likes,
    foreign_key: :track_id,
    class_name: 'TrackLike'

  has_many :likers,
    through: :likes,
    source: :user

end
