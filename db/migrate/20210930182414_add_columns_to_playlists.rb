class AddColumnsToPlaylists < ActiveRecord::Migration[5.2]
  def change
    add_column :playlists, :is_public, :boolean, null: false, default: false
  end
end
