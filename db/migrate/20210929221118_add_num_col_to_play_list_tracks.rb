class AddNumColToPlayListTracks < ActiveRecord::Migration[5.2]
  def change
    add_column :playlist_tracks, :num, :integer, null: false
  end
end
