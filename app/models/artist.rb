class Artist < ApplicationRecord

  validates :artist_name, presence: true

  has_many :albums,
    foreign_key: :artist_id,
    class_name: 'Album'

  has_many :follows,
    foreign_key: :artist_id,
    class_name: 'Follow'

  has_many :followers,
    through: :follows,
    source: :user

  has_many :tracks,
    through: :albums,
    source: :tracks

end