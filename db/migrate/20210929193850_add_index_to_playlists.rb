class AddIndexToPlaylists < ActiveRecord::Migration[5.2]
  def change
    add_index :playlists, [:title, :user_id], unique: true
  end
end
