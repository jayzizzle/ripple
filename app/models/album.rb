class Album < ApplicationRecord

  validates :title, :artist_id, :category, :year, presence: true
  validates :category, inclusion: { in: ['LP', 'EP', 'Single'] }
  validates :is_explicit, inclusion: { in: [true, false] }

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'Artist'

  has_many :tracks,
    foreign_key: :album_id,
    class_name: 'Track'

  has_many :likes,
    foreign_key: :album_id,
    class_name: 'AlbumLike'

  has_many :likers,
    through: :likes,
    source: :user



end
