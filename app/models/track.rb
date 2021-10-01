class Track < ApplicationRecord

  validates :title, :artist_id, :album_id, :num, :seconds, presence: true
  validates :is_interlude, inclusion: { in: [true, false] }

  has_many :likes,
    foreign_key: :track_id,
    class_name: 'TrackLike'

  has_many :likers,
    through: :likes,
    source: :user

  belongs_to :album,
    foreign_key: :album_id,
    class_name: 'Album'

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'Artist'

  has_one_attached :mp3File

end
