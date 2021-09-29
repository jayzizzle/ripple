class Follow < ApplicationRecord

  validates :user_id, :artist_id, presence: true
  validates :user_id, uniqueness: { scope: :artist_id }

  belongs_to :user,
    foreign_key: :user_id,
    class_name: 'User'

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: 'Artist'

end
