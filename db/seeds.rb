# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Artist.destroy_all
Album.destroy_all
Track.destroy_all
Playlist.destroy_all
PlaylistTrack.destroy_all
Genre.destroy_all
GenreTrack.destroy_all
Follow.destroy_all
AlbumLike.destroy_all
TrackLike.destroy_all

require 'open-uri'

spidey = User.create(username: 'spidey', email: 'spidey@marvel.com', password: 'parker')
miles = User.create(username: 'miles', email: 'miles@marvel.com', password: 'morales')
gwen = User.create(username: 'gwen', email: 'gwen@marvel.com', password: 'gstacy')

her = Artist.create(
    artist_name: 'H.E.R.', 
    bio: ''
)

kehlani = Artist.create(
    artist_name: 'Kehlani', 
    bio: ''
)

wolftyla = Artist.create(
    artist_name: 'Wolftyla', 
    bio: ''
)

file003 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/her.jpg')
her.photo.attach(io: file003, filename: 'her.jpg')

file007 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/kehlani.jpg')
kehlani.photo.attach(io: file007, filename: 'kehlani.jpg')

file011 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_artists/wolftyla.jpg')
wolftyla.photo.attach(io: file011, filename: 'wolftyla.jpg')

her_vol_1 = Album.create(
    title: 'H.E.R. Volume 1',
    artist_id: her.id,
    category: 'EP',
    year: 2016,
    is_explicit: false
)

cloud_19 = Album.create(
    title: 'Cloud 19',
    artist_id: kehlani.id,
    category: 'LP',
    year: 2014,
    is_explicit: true
)

wolf_in_color = Album.create(
    title: 'Wolf In Color',
    artist_id: wolftyla.id,
    category: 'LP',
    year: 2020,
    is_explicit: false
)

cover01 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/her-vol1.jpg')
her_vol_1.cover.attach(io: cover01, filename: 'her-vol1.jpg')

cover02 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/kehlani-cloud.jpg')
cloud_19.cover.attach(io: cover02, filename: 'kehlani-cloud.jpg')

cover03 = URI.open('https://ripple-jz-seeds.s3.us-west-1.amazonaws.com/_covers/wolftyla-wolf.jpg')
wolf_in_color.cover.attach(io: cover03, filename: 'wolftyla-wolf.jpg')

her_vol_1_01 = Track.create(
    title: 'Losing',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 1,
    seconds: 225
)

her_vol_1_02 = Track.create(
    title: 'Wait For It',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 2,
    seconds: 135
)

her_vol_1_03 = Track.create(
    title: 'Facts',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 3,
    seconds: 218
)

her_vol_1_04 = Track.create(
    title: 'U',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 4,
    seconds: 178
)

her_vol_1_05 = Track.create(
    title: 'Focus',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 5,
    seconds: 200
)

her_vol_1_06 = Track.create(
    title: 'Jungle',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 6,
    seconds: 304
)

her_vol_1_07 = Track.create(
    title: 'Pigment',
    artist_id: her.id,
    album_id: her_vol_1.id,
    num: 7,
    seconds: 86
)

cloud_19_01 = Track.create(
    title: 'FWU',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 1,
    seconds: 202
)

cloud_19_02 = Track.create(
    title: 'As I Am',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 2,
    seconds: 251
)

cloud_19_03 = Track.create(
    title: 'Get Away',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 3,
    seconds: 200
)

cloud_19_04 = Track.create(
    title: 'Deserve Better',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 4,
    seconds: 146
)

cloud_19_05 = Track.create(
    title: 'How We Do Us',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 5,
    seconds: 219
)

cloud_19_06 = Track.create(
    title: '1st Position',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 6,
    seconds: 190
)

cloud_19_07 = Track.create(
    title: 'Act A Fool',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 7,
    seconds: 175
)

cloud_19_08 = Track.create(
    title: 'Tell Your Mama',
    artist_id: kehlani.id,
    album_id: cloud_19.id,
    num: 8,
    seconds: 145
)

wolf_in_color_01 = Track.create(
    title: 'Someone Like You',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 1,
    seconds: 162
)

wolf_in_color_02 = Track.create(
    title: 'Boom Boom Room',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 2,
    seconds: 172
)

wolf_in_color_03 = Track.create(
    title: 'All Tinted',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 3,
    seconds: 198
)

wolf_in_color_04 = Track.create(
    title: 'Candy',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 4,
    seconds: 152
)

wolf_in_color_05 = Track.create(
    title: 'Butterflies',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 5,
    seconds: 191
)

wolf_in_color_06 = Track.create(
    title: 'In The Middle',
    artist_id: wolftyla.id,
    album_id: wolf_in_color.id,
    num: 6,
    seconds: 152
)

hiphop = Genre.create(title: 'Hip-Hop')
rnb = Genre.create(title: 'R&B')
pop = Genre.create(title: 'Pop')

playlist1 = Playlist.create(
    title: 'Featured',
    user_id: 1,
    is_public: true
)

playlist2 = Playlist.create(
    title: 'Breakouts',
    user_id: 1
)

feat_track1 = PlaylistTrack.create(
    playlist_id: playlist1.id,
    track_id: wolf_in_color_03.id,
    num: 1
)

feat_track2 = PlaylistTrack.create(
    playlist_id: playlist1.id,
    track_id: her_vol_1_02.id,
    num: 2
)

feat_track3 = PlaylistTrack.create(
    playlist_id: playlist1.id,
    track_id: cloud_19_01.id,
    num: 3
)

play_track1 = PlaylistTrack.create(
    playlist_id: playlist2.id,
    track_id: cloud_19_01.id,
    num: 1
)

play_track2 = PlaylistTrack.create(
    playlist_id: playlist2.id,
    track_id: wolf_in_color_04.id,
    num: 2
)

play_track3 = PlaylistTrack.create(
    playlist_id: playlist2.id,
    track_id: her_vol_1_05.id,
    num: 3
)

follows1 = Follow.create(
    artist_id: wolftyla.id,
    user_id: 1
)

follows3 = Follow.create(
    artist_id: kehlani.id,
    user_id: 1
)

album_like3 = AlbumLike.create(
    album_id: wolf_in_color.id,
    user_id: 1
)

tt07 = TopTrack.create(
  track_id: her_vol_1_02.id,
  artist_id: her.id
)

tt08 = TopTrack.create(
  track_id: her_vol_1_05.id,
  artist_id: her.id
)

tt09 = TopTrack.create(
  track_id: her_vol_1_01.id,
  artist_id: her.id
)

tt19 = TopTrack.create(
  track_id: cloud_19_01.id,
  artist_id: kehlani.id
)

tt20 = TopTrack.create(
  track_id: cloud_19_02.id,
  artist_id: kehlani.id
)

tt21 = TopTrack.create(
  track_id: cloud_19_06.id,
  artist_id: kehlani.id
)

tt31 = TopTrack.create(
  track_id: wolf_in_color_03.id,
  artist_id: wolftyla.id
)

tt32 = TopTrack.create(
  track_id: wolf_in_color_04.id,
  artist_id: wolftyla.id
)

tt33 = TopTrack.create(
  track_id: wolf_in_color_05.id,
  artist_id: wolftyla.id
)