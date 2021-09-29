class CreateGenreTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :genre_tracks do |t|
      t.integer :genre_id, null: false
      t.integer :track_id, null: false

      t.timestamps
    end
    add_index :genre_tracks, :genre_id
    add_index :genre_tracks, :track_id
    add_index :genres, :title, unique: true
  end
end
