class TopTrack < ApplicationRecord

  validates :track_id, :artist_id, presence: true
  validates :track_id, uniqueness: { scope: :track_id }

  belongs_to :track,
    foreign_key: :track_id,
    class_name: 'Track'

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'Artist'

end