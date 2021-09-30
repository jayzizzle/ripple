class Playlist < ApplicationRecord

  validates :title, :user_id, presence: true
  validates :user_id, uniqueness: { scope: :title }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  has_many :tracks,
    foreign_key: :playlist_id,
    class_name: 'PlaylistTrack'

  has_many :artists,
    through: :tracks,
    source: :artist

end