class CreateTopTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :top_tracks do |t|
      t.integer :track_id, null: false
      t.integer :artist_id, null: false

      t.timestamps
    end

    add_index :top_tracks, :track_id
    add_index :top_tracks, :artist_id
    add_index :top_tracks, [:track_id, :artist_id], unique: true
  end
end
