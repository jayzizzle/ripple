json.extract! @artist, :id, :artist_name
json.albums @artist.albums
json.topTracks @artist.top_tracks