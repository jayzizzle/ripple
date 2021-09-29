# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_29_224152) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "album_likes", force: :cascade do |t|
    t.integer "album_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id", "user_id"], name: "index_album_likes_on_album_id_and_user_id", unique: true
    t.index ["album_id"], name: "index_album_likes_on_album_id"
    t.index ["user_id"], name: "index_album_likes_on_user_id"
  end

  create_table "albums", force: :cascade do |t|
    t.string "title", null: false
    t.integer "artist_id", null: false
    t.string "category", null: false
    t.integer "year", null: false
    t.boolean "is_explicit", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_albums_on_artist_id"
  end

  create_table "artists", force: :cascade do |t|
    t.string "artist_name", null: false
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_name"], name: "index_artists_on_artist_name"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "artist_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id", "user_id"], name: "index_follows_on_artist_id_and_user_id", unique: true
    t.index ["artist_id"], name: "index_follows_on_artist_id"
    t.index ["user_id"], name: "index_follows_on_user_id"
  end

  create_table "genre_tracks", force: :cascade do |t|
    t.integer "genre_id", null: false
    t.integer "track_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["genre_id"], name: "index_genre_tracks_on_genre_id"
    t.index ["track_id"], name: "index_genre_tracks_on_track_id"
  end

  create_table "genres", force: :cascade do |t|
    t.string "title", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title"], name: "index_genres_on_title", unique: true
  end

  create_table "playlist_tracks", force: :cascade do |t|
    t.integer "playlist_id", null: false
    t.integer "track_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "num", null: false
    t.index ["playlist_id", "track_id"], name: "index_playlist_tracks_on_playlist_id_and_track_id", unique: true
    t.index ["playlist_id"], name: "index_playlist_tracks_on_playlist_id"
    t.index ["track_id"], name: "index_playlist_tracks_on_track_id"
  end

  create_table "playlists", force: :cascade do |t|
    t.string "title", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title", "user_id"], name: "index_playlists_on_title_and_user_id", unique: true
    t.index ["user_id"], name: "index_playlists_on_user_id"
  end

  create_table "track_likes", force: :cascade do |t|
    t.integer "track_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["track_id", "user_id"], name: "index_track_likes_on_track_id_and_user_id", unique: true
    t.index ["track_id"], name: "index_track_likes_on_track_id"
    t.index ["user_id"], name: "index_track_likes_on_user_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.string "title", null: false
    t.integer "artist_id", null: false
    t.integer "album_id", null: false
    t.integer "num", null: false
    t.integer "seconds", null: false
    t.boolean "is_interlude", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["album_id"], name: "index_tracks_on_album_id"
    t.index ["artist_id"], name: "index_tracks_on_artist_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
