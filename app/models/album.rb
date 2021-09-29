class Album < ApplicationRecord

  validates :title, :artist_id, :type, :year, presence: true
  validates :type, inclusion: { in: ['LP', 'EP', 'Single'] }
  validates :is_explicit, inclusion: { in: [true, false] }

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'Artist'

  has_many :likes,
    foreign_key: :album_id,
    class_name: 'AlbumLike'

  has_many :likers,
    through: :likes,
    source: :user

end
