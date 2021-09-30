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


spidey = User.create(username: 'spidey', email: 'spidey@marvel.com', password: 'parker')
miles = User.create(username: 'miles', email: 'miles@marvel.com', password: 'morales')
gwen = User.create(username: 'gwen', email: 'gwen@marvel.com', password: 'gstacy')


tinashe = Artist.create(
    artist_name: 'Tinashe', 
    bio: ''
)

jhene = Artist.create(
    artist_name: 'Jhene Aiko', 
    bio: ''
)

miguel = Artist.create(
    artist_name: 'Miguel', 
    bio: ''
)

frank = Artist.create(
    artist_name: 'Frank Ocean', 
    bio: ''
)

jenevieve = Artist.create(
    artist_name: 'Jenevieve', 
    bio: ''
)

wolftyla = Artist.create(
    artist_name: 'Wolftyla', 
    bio: ''
)

weeknd = Artist.create(
    artist_name: 'The Weeknd', 
    bio: ''
)

drake = Artist.create(
    artist_name: 'Drake', 
    bio: ''
)

jcole = Artist.create(
    artist_name: 'J. Cole', 
    bio: ''
)

kehlani = Artist.create(
    artist_name: 'Kehlani', 
    bio: ''
)

her = Artist.create(
    artist_name: 'H.E.R.', 
    bio: ''
)

in_case_we_die = Album.create(
    title: 'In Case We Die',
    artist_id: tinashe.id,
    category: 'LP',
    year: 2012,
    is_explicit: true
)

reverie = Album.create(
    title: 'Reverie',
    artist_id: tinashe.id,
    category: 'LP',
    year: 2012,
    is_explicit: true
)

black_water = Album.create(
    title: 'Black Water',
    artist_id: tinashe.id,
    category: 'LP',
    year: 2013,
    is_explicit: true
)

sailing_souls = Album.create(
    title: 'Sailing Soul(s)',
    artist_id: jhene.id,
    category: 'LP',
    year: 2011,
    is_explicit: true
)

nostalgia_ultra = Album.create(
    title: 'Nostalgia, Ultra',
    artist_id: frank.id,
    category: 'LP',
    year: 2011,
    is_explicit: true
)

house_of_balloons = Album.create(
    title: 'House Of Balloons',
    artist_id: weeknd.id,
    category: 'LP',
    year: 2011,
    is_explicit: true
)

thursday = Album.create(
    title: 'Thursday',
    artist_id: weeknd.id,
    category: 'LP',
    year: 2011,
    is_explicit: true
)

echoes_of_silence = Album.create(
    title: 'Echoes Of Silence',
    artist_id: weeknd.id,
    category: 'LP',
    year: 2011,
    is_explicit: true
)

mischief = Album.create(
    title: 'Mischief: The Mixtape',
    artist_id: miguel.id,
    category: 'LP',
    year: 2008,
    is_explicit: true
)

cloud_19 = Album.create(
    title: 'Cloud 19',
    artist_id: kehlani.id,
    category: 'LP',
    year: 2014,
    is_explicit: true
)

division = Album.create(
    title: 'Division',
    artist_id: jenevieve.id,
    category: 'LP',
    year: 2021,
    is_explicit: true
)

wolf_in_color = Album.create(
    title: 'Wolf In Color',
    artist_id: wolftyla.id,
    category: 'LP',
    year: 2020,
    is_explicit: false
)

her_vol_1 = Album.create(
    title: 'H.E.R. Volume 1',
    artist_id: her.id,
    category: 'EP',
    year: 2016,
    is_explicit: false
)

her_vol_2 = Album.create(
    title: 'H.E.R. Volume 2',
    artist_id: her.id,
    category: 'EP',
    year: 2017,
    is_explicit: false
)

friday_night_lights = Album.create(
    title: 'Friday Night Lights',
    artist_id: jcole.id,
    category: 'LP',
    year: 2010,
    is_explicit: true
)

room_for_improvement = Album.create(
    title: 'Room For Improvement',
    artist_id: drake.id,
    category: 'LP',
    year: 2006,
    is_explicit: true
)

room_for_improvement_01 = Track.create(
    title: 'Intro',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 1,
    seconds: 52,
    is_interlude: true
)

room_for_improvement_02 = Track.create(
    title: 'Pianist Hands (Interlude)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 2,
    seconds: 71
)

room_for_improvement_03 = Track.create(
    title: 'Special (feat. Voyce)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 3,
    seconds: 292
)

room_for_improvement_04 = Track.create(
    title: 'Do What You Do',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 4,
    seconds: 228
)

room_for_improvement_05 = Track.create(
    title: 'Money (Remix)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 5,
    seconds: 145
)

room_for_improvement_06 = Track.create(
    title: 'AM 2 PM (feat. Nickelus F)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 6,
    seconds: 208
)

room_for_improvement_07 = Track.create(
    title: 'City Is Mine',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 7,
    seconds: 233
)

room_for_improvement_08 = Track.create(
    title: "Drake's Voicemail Box #1",
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 8,
    seconds: 72,
    is_interlude: true
)

room_for_improvement_09 = Track.create(
    title: 'Bad Meaning Good',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 9,
    seconds: 152
)

room_for_improvement_10 = Track.create(
    title: 'Thrill Is Gone',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 10,
    seconds: 182
)

room_for_improvement_11 = Track.create(
    title: 'Make Things Right',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 11,
    seconds: 161
)

room_for_improvement_12 = Track.create(
    title: 'Video Girl',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 12,
    seconds: 226
)

room_for_improvement_13 = Track.create(
    title: "Drake's Voicemail Box #2",
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 13,
    seconds: 16,
    is_interlude: true
)

room_for_improvement_14 = Track.create(
    title: 'Come Winter',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 14,
    seconds: 328
)

room_for_improvement_15 = Track.create(
    title: 'Extra Special',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 15,
    seconds: 178
)

room_for_improvement_16 = Track.create(
    title: 'About The Game (Freestyle)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 16,
    seconds: 105
)

room_for_improvement_17 = Track.create(
    title: 'All This Love (feat. Voyce)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 17,
    seconds: 200
)

room_for_improvement_18 = Track.create(
    title: "Drake's Voicemail Box #3",
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 18,
    seconds: 72,
    is_interlude: true
)

room_for_improvement_19 = Track.create(
    title: "A Scorpio's Mind",
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 19,
    seconds: 232
)

room_for_improvement_20 = Track.create(
    title: 'S.T.R.E.S.S.',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 20,
    seconds: 223
)

room_for_improvement_21 = Track.create(
    title: 'Try Harder',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 21,
    seconds: 142
)

room_for_improvement_22 = Track.create(
    title: 'Kick, Push (Remix)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 22,
    seconds: 284
)

room_for_improvement_23 = Track.create(
    title: 'U.P.A. (Outro)',
    artist_id: drake.id,
    album_id: room_for_improvement.id,
    num: 23,
    seconds: 134,
    is_interlude: true
)

nostalgia_ultra_01 = Track.create(
    title: 'Street Fighter',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 1,
    seconds: 23,
    is_interlude: true
)

nostalgia_ultra_02 = Track.create(
    title: 'Strawberry Swing',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 2,
    seconds: 235
)

nostalgia_ultra_03 = Track.create(
    title: 'Novacane',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 3,
    seconds: 303
)

nostalgia_ultra_04 = Track.create(
    title: 'We All Try',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 4,
    seconds: 172
)

nostalgia_ultra_05 = Track.create(
    title: "Bitches Talkin' (Metal Gear Solid)",
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 5,
    seconds: 22,
    is_interlude: true
)

nostalgia_ultra_06 = Track.create(
    title: 'Songs For Women',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 6,
    seconds: 253
)

nostalgia_ultra_07 = Track.create(
    title: 'Lovecrimes',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 7,
    seconds: 240
)

_08 = Track.create(
    title: 'Goldeneye',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 8,
    seconds: 18,
    is_interlude: true
)

nostalgia_ultra_09 = Track.create(
    title: 'There Will Be Tears',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 9,
    seconds: 195
)

nostalgia_ultra_10 = Track.create(
    title: 'Swim Good',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 10,
    seconds: 257
)

nostalgia_ultra_11 = Track.create(
    title: 'Dust',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 11,
    seconds: 154
)

nostalgia_ultra_12 = Track.create(
    title: 'American Wedding (feat. James Fauntleroy)',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 12,
    seconds: 421
)

nostalgia_ultra_13 = Track.create(
    title: 'Soul Calibur',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 13,
    seconds: 18,
    is_interlude: true
)

nostalgia_ultra_14 = Track.create(
    title: 'Nature Feels',
    artist_id: frank.id,
    album_id: nostalgia_ultra.id,
    num: 14,
    seconds: 223
)

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

her_vol_2_01 = Track.create(
    title: 'Every Kind Of Way',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 1,
    seconds: 160
)

her_vol_2_02 = Track.create(
    title: 'Say It Again',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 2,
    seconds: 172
)

her_vol_2_03 = Track.create(
    title: 'Still Down',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 3,
    seconds: 169
)

her_vol_2_04 = Track.create(
    title: 'Avenue',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 4,
    seconds: 214
)

her_vol_2_05 = Track.create(
    title: 'Gone Away',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 5,
    seconds: 249
)

her_vol_2_06 = Track.create(
    title: "I Won't",
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 6,
    seconds: 212
)

her_vol_2_07 = Track.create(
    title: 'Changes',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 7,
    seconds: 213
)

her_vol_2_08 = Track.create(
    title: 'Lights On',
    artist_id: her.id,
    album_id: her_vol_2.id,
    num: 8,
    seconds: 219
)

friday_night_lights_01 = Track.create(
    title: 'Friday Night Lights (Intro)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 1,
    seconds: 105,
    is_interlude: true
)

friday_night_lights_02 = Track.create(
    title: 'Too Deep For The Intro',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 2,
    seconds: 225
)

friday_night_lights_03 = Track.create(
    title: "Before I'm Gone",
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 3,
    seconds: 264
)

friday_night_lights_04 = Track.create(
    title: 'Back To The Topic (Freestyle)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 4,
    seconds: 180
)

friday_night_lights_05 = Track.create(
    title: 'You Got It (feat. Wale)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 5,
    seconds: 287
)

friday_night_lights_06 = Track.create(
    title: 'Villematic',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 6,
    seconds: 193
)

friday_night_lights_07 = Track.create(
    title: 'Enchanted (feat. Omen)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 7,
    seconds: 251
)

friday_night_lights_08 = Track.create(
    title: 'Blow Up',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 8,
    seconds: 300
)

friday_night_lights_09 = Track.create(
    title: 'Higher',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 9,
    seconds: 229
)

friday_night_lights_10 = Track.create(
    title: 'In The Morning (feat. Drake)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 10,
    seconds: 234
)

friday_night_lights_11 = Track.create(
    title: '2Face',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 11,
    seconds: 286
)

friday_night_lights_12 = Track.create(
    title: 'The Autograph',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 12,
    seconds: 223
)

friday_night_lights_13 = Track.create(
    title: 'Best Friend',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 13,
    seconds: 205
)

friday_night_lights_14 = Track.create(
    title: 'Cost Me A Lot',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 14,
    seconds: 198
)

friday_night_lights_15 = Track.create(
    title: 'Premeditated Murder',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 15,
    seconds: 234
)

friday_night_lights_16 = Track.create(
    title: 'Home For The Holidays',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 16,
    seconds: 235
)

friday_night_lights_17 = Track.create(
    title: 'Love Me Not',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 17,
    seconds: 211
)

friday_night_lights_18 = Track.create(
    title: 'See World',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 18,
    seconds: 254
)

friday_night_lights_19 = Track.create(
    title: 'Farewell',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 19,
    seconds: 212
)

friday_night_lights_20 = Track.create(
    title: 'Looking For Trouble (Bonus Track)',
    artist_id: jcole.id,
    album_id: friday_night_lights.id,
    num: 20,
    seconds: 335
)

division_01 = Track.create(
    title: 'Medallion',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 1,
    seconds: 147
)

division_02 = Track.create(
    title: 'Nxwhere',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 2,
    seconds: 197
)

division_03 = Track.create(
    title: 'Eternal',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 3,
    seconds: 159
)

division_04 = Track.create(
    title: 'Midnight Charm',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 4,
    seconds: 178
)

division_05 = Track.create(
    title: 'Blameless',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 5,
    seconds: 186
)

division_06 = Track.create(
    title: 'No Sympathy',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 6,
    seconds: 187
)

division_07 = Track.create(
    title: 'Baby Powder',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 7,
    seconds: 177
)

division_08 = Track.create(
    title: 'Resume',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 8,
    seconds: 180
)

division_09 = Track.create(
    title: 'Mellow Eyes',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 9,
    seconds: 183
)

division_10 = Track.create(
    title: 'Division',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 10,
    seconds: 172
)

division_11 = Track.create(
    title: 'Exit Wounds',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 11,
    seconds: 186
)

division_12 = Track.create(
    title: 'Crybaby',
    artist_id: jenevieve.id,
    album_id: division.id,
    num: 12,
    seconds: 235
)

sailing_souls_01 = Track.create(
    title: 'The Beginning',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 1,
    seconds: 9,
    is_interlude: true
)

sailing_souls_02 = Track.create(
    title: 'Stranger',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 2,
    seconds: 215
)

sailing_souls_03 = Track.create(
    title: 'Hoe (feat. Miguel, Gucci Mane)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 3,
    seconds: 218
)

sailing_souls_04 = Track.create(
    title: 'July (feat. Drake)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 4,
    seconds: 239
)

sailing_souls_05 = Track.create(
    title: 'My Mine',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 5,
    seconds: 242
)

sailing_souls_06 = Track.create(
    title: 'Popular',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 6,
    seconds: 178
)

sailing_souls_07 = Track.create(
    title: 'Real Now (feat. Dominik, HOPE, K. Roosevelt)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 7,
    seconds: 261
)

sailing_souls_08 = Track.create(
    title: 'Sailing Not Selling (feat. Kanye West)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 8,
    seconds: 181
)

sailing_souls_09 = Track.create(
    title: 'Do Better Blues (feat. HOPE)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 9,
    seconds: 254
)

sailing_souls_10 = Track.create(
    title: 'Higher',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 10,
    seconds: 232
)

sailing_souls_11 = Track.create(
    title: 'You vs Them',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 11,
    seconds: 205
)

sailing_souls_12 = Track.create(
    title: 'Space Jam',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 12,
    seconds: 179
)

sailing_souls_13 = Track.create(
    title: 'Growing Apart Too (feat. Kendrick Lamar, HOPE)',
    artist_id: jhene.id,
    album_id: sailing_souls.id,
    num: 13,
    seconds: 204
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

mischief_01 = Track.create(
    title: 'Intro',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 1,
    seconds: 73,
    is_interlude: true
)

mischief_02 = Track.create(
    title: 'Ooh Ahh!',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 2,
    seconds: 154
)

mischief_03 = Track.create(
    title: 'All Night Long',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 3,
    seconds: 172
)

mischief_04 = Track.create(
    title: 'Strawberry Amazing',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 4,
    seconds: 207
)

mischief_05 = Track.create(
    title: 'Dig',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 5,
    seconds: 157
)

mischief_06 = Track.create(
    title: 'Overload',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 6,
    seconds: 182
)

mischief_07 = Track.create(
    title: 'Pick Up The Pace',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 7,
    seconds: 135
)

mischief_08 = Track.create(
    title: 'Super(natural)',
    artist_id: miguel.id,
    album_id: mischief.id,
    num: 8,
    seconds: 239
)

black_water_01 = Track.create(
    title: 'Black Water',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 1,
    seconds: 176
)

black_water_02 = Track.create(
    title: 'Before The Storm (Interlude)',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 2,
    seconds: 23,
    is_interlude: true
)

black_water_03 = Track.create(
    title: 'Vulnerable (feat. Travis Scott)',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 3,
    seconds: 206
)

black_water_04 = Track.create(
    title: 'Secret Weapon',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 4,
    seconds: 190
)

black_water_05 = Track.create(
    title: 'Video Tapes (Interlude)',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 5,
    seconds: 39,
    is_interlude: true
)

black_water_06 = Track.create(
    title: 'Midnight Sun',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 6,
    seconds: 272
)

black_water_07 = Track.create(
    title: '1 For Me',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 7,
    seconds: 208
)

black_water_08 = Track.create(
    title: 'Daybreak (Interlude)',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 8,
    seconds: 34,
    is_interlude: true
)

black_water_09 = Track.create(
    title: 'Fugitive',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 9,
    seconds: 134
)

black_water_10 = Track.create(
    title: 'Stunt',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 10,
    seconds: 215
)

black_water_11 = Track.create(
    title: 'Just A Taste',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 11,
    seconds: 197
)

black_water_12 = Track.create(
    title: 'Middle Of Nowhere',
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 12,
    seconds: 192
)

black_water_13 = Track.create(
    title: "Ain't Ready...",
    artist_id: tinashe.id,
    album_id: black_water.id,
    num: 13,
    seconds: 92
)

in_case_we_die_01 = Track.create(
    title: 'The Last Night On Earth',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 1,
    seconds: 278
)

in_case_we_die_02 = Track.create(
    title: 'My High',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 2,
    seconds: 269
)

in_case_we_die_03 = Track.create(
    title: 'Let You Love Me',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 3,
    seconds: 252
)

in_case_we_die_04 = Track.create(
    title: 'That',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 4,
    seconds: 344
)

in_case_we_die_05 = Track.create(
    title: 'The Will To Survive (Interlude)',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 5,
    seconds: 37,
    is_interlude: true
)

in_case_we_die_06 = Track.create(
    title: 'Boss',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 6,
    seconds: 221
)

in_case_we_die_07 = Track.create(
    title: 'I Tried',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 7,
    seconds: 275
)

in_case_we_die_08 = Track.create(
    title: 'Another Season',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 8,
    seconds: 247
)

in_case_we_die_09 = Track.create(
    title: 'This Feeling',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 9,
    seconds: 201
)

in_case_we_die_10 = Track.create(
    title: 'Stumble',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 10,
    seconds: 405
)

in_case_we_die_11 = Track.create(
    title: 'Crossing The Cosmo',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 11,
    seconds: 227
)

in_case_we_die_12 = Track.create(
    title: 'Fading (Interlude)',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 12,
    seconds: 86,
    is_interlude: true
)

in_case_we_die_13 = Track.create(
    title: 'Biding My Time',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 13,
    seconds: 165
)

in_case_we_die_14 = Track.create(
    title: 'Heaven (Interlude)',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 14,
    seconds: 129,
    is_interlude: true
)

in_case_we_die_15 = Track.create(
    title: 'Chainless (Bonus Track)',
    artist_id: tinashe.id,
    album_id: in_case_we_die.id,
    num: 15,
    seconds: 191
)

reverie_01 = Track.create(
    title: 'Fear Not',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 1,
    seconds: 153
)

reverie_02 = Track.create(
    title: 'Stargazing',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 2,
    seconds: 225
)

reverie_03 = Track.create(
    title: 'Yours',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 3,
    seconds: 277
)

reverie_04 = Track.create(
    title: 'Slow',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 4,
    seconds: 268
)

reverie_05 = Track.create(
    title: 'Another Me',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 5,
    seconds: 249
)

reverie_06 = Track.create(
    title: 'Come When I Call',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 6,
    seconds: 274
)

reverie_07 = Track.create(
    title: 'Illusions (Interlude)',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 7,
    seconds: 45,
    is_interlude: true
)

reverie_08 = Track.create(
    title: 'Reverie',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 8,
    seconds: 237
)

reverie_09 = Track.create(
    title: "I'm Selfish",
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 9,
    seconds: 162
)

reverie_10 = Track.create(
    title: 'Ecstasy',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 10,
    seconds: 203
)

reverie_11 = Track.create(
    title: 'Who Am I Working For?',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 11,
    seconds: 227
)

reverie_12 = Track.create(
    title: 'Let You Love Me (XXYYXX Remix)',
    artist_id: tinashe.id,
    album_id: reverie.id,
    num: 12,
    seconds: 228
)

echoes_of_silence_01 = Track.create(
    title: 'D.D.',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 1,
    seconds: 275
)

echoes_of_silence_02 = Track.create(
    title: 'Montreal',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 2,
    seconds: 250
)

echoes_of_silence_03 = Track.create(
    title: 'Outside',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 3,
    seconds: 260
)

echoes_of_silence_04 = Track.create(
    title: 'XO / The Host',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 4,
    seconds: 443
)

echoes_of_silence_05 = Track.create(
    title: 'Initiation',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 5,
    seconds: 260
)

echoes_of_silence_06 = Track.create(
    title: 'Same Old Song (feat. Juicy J)',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 6,
    seconds: 312
)

echoes_of_silence_07 = Track.create(
    title: 'The Fall',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 7,
    seconds: 345
)

echoes_of_silence_08 = Track.create(
    title: 'Next',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 8,
    seconds: 360
)

echoes_of_silence_09 = Track.create(
    title: 'Echoes Of Silence',
    artist_id: weeknd.id,
    album_id: echoes_of_silence.id,
    num: 9,
    seconds: 242
)

house_of_balloons_01 = Track.create(
    title: 'High For This',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 1,
    seconds: 247
)

house_of_balloons_02 = Track.create(
    title: 'What You Need',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 2,
    seconds: 206
)

house_of_balloons_03 = Track.create(
    title: 'House Of Balloons / Glass Table Girls',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 3,
    seconds: 407
)

house_of_balloons_04 = Track.create(
    title: 'The Morning',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 4,
    seconds: 315
)

house_of_balloons_05 = Track.create(
    title: 'Wicked Games',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 5,
    seconds: 325
)

house_of_balloons_06 = Track.create(
    title: 'The Party & The After Party',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 6,
    seconds: 459
)

house_of_balloons_07 = Track.create(
    title: 'Coming Down',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 7,
    seconds: 295
)

house_of_balloons_08 = Track.create(
    title: 'Loft Music',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 8,
    seconds: 364
)

house_of_balloons_09 = Track.create(
    title: 'The Knowing',
    artist_id: weeknd.id,
    album_id: house_of_balloons.id,
    num: 9,
    seconds: 341
)

thursday_01 = Track.create(
    title: 'Lonely Star',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 1,
    seconds: 349
)

thursday_02 = Track.create(
    title: 'Life Of The Party',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 2,
    seconds: 297
)

thursday_03 = Track.create(
    title: 'Thursday',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 3,
    seconds: 319
)

thursday_04 = Track.create(
    title: 'The Zone (feat. Drake)',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 4,
    seconds: 418
)

thursday_05 = Track.create(
    title: 'The Birds, Pt. 1',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 5,
    seconds: 214
)

thursday_06 = Track.create(
    title: 'The Birds, Pt. 2',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 6,
    seconds: 350
)

thursday_07 = Track.create(
    title: 'Gone',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 7,
    seconds: 487
)

thursday_08 = Track.create(
    title: 'Rolling Stone',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 8,
    seconds: 230
)

thursday_09 = Track.create(
    title: 'Heaven Or Las Vegas',
    artist_id: weeknd.id,
    album_id: thursday.id,
    num: 9,
    seconds: 353
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

playlist1 = Playlist.create(
    title: 'Breakouts',
    user_id: 2
)

playlist_track1 = PlaylistTrack.create(
    playlist_id: playlist1.id,
    track_id: wolf_in_color_03.id,
    num: 1
)

playlist_track2 = PlaylistTrack.create(
    playlist_id: playlist1.id,
    track_id: division_08.id,
    num: 2
)

playlist_track3 = PlaylistTrack.create(
    playlist_id: playlist1.id,
    track_id: cloud_19_01.id,
    num: 3
)

hiphop = Genre.create(title: 'Hip-Hop')
rnb = Genre.create(title: 'R&B')
pop = Genre.create(title: 'Pop')

follows1 = Follow.create(
    artist_id: wolftyla.id,
    user_id: 2
)

follows2 = Follow.create(
    artist_id: jenevieve.id,
    user_id: 2
)

follows3 = Follow.create(
    artist_id: kehlani.id,
    user_id: 2
)

album_like1 = AlbumLike.create(
    album_id: sailing_souls.id,
    user_id: 2
)

album_like2 = AlbumLike.create(
    album_id: nostalgia_ultra.id,
    user_id: 2
)

album_like3 = AlbumLike.create(
    album_id: wolf_in_color.id,
    user_id: 2
)

track_like1 = TrackLike.create(
    track_id: sailing_souls_04.id,
    user_id: 2
)

track_like2 = TrackLike.create(
    track_id: reverie_03.id,
    user_id: 2
)

track_like3 = TrackLike.create(
    track_id: in_case_we_die_11.id,
    user_id: 2
)

tt01 = TopTrack.create(
  track_id: room_for_improvement_03.id,
  artist_id: drake.id
)

tt02 = TopTrack.create(
  track_id: room_for_improvement_14.id,
  artist_id: drake.id
)

tt03 = TopTrack.create(
  track_id: room_for_improvement_21.id,
  artist_id: drake.id
)

tt04 = TopTrack.create(
  track_id: nostalgia_ultra_03.id,
  artist_id: frank.id
)

tt05 = TopTrack.create(
  track_id: nostalgia_ultra_06.id,
  artist_id: frank.id
)

tt06 = TopTrack.create(
  track_id: nostalgia_ultra_10.id,
  artist_id: frank.id
)

tt07 = TopTrack.create(
  track_id: her_vol_2_02.id,
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

tt10 = TopTrack.create(
  track_id: friday_night_lights_06.id,
  artist_id: jcole.id
)

tt11 = TopTrack.create(
  track_id: friday_night_lights_03.id,
  artist_id: jcole.id
)

tt12 = TopTrack.create(
  track_id: friday_night_lights_02.id,
  artist_id: jcole.id
)

tt13 = TopTrack.create(
  track_id: division_08.id,
  artist_id: jenevieve.id
)

tt14 = TopTrack.create(
  track_id: division_07.id,
  artist_id: jenevieve.id
)

tt15 = TopTrack.create(
  track_id: division_09.id,
  artist_id: jenevieve.id
)

tt16 = TopTrack.create(
  track_id: sailing_souls_04.id,
  artist_id: jhene.id
)

tt17 = TopTrack.create(
  track_id: sailing_souls_03.id,
  artist_id: jhene.id
)

tt18 = TopTrack.create(
  track_id: sailing_souls_07.id,
  artist_id: jhene.id
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

tt22 = TopTrack.create(
  track_id: mischief_02.id,
  artist_id: miguel.id
)

tt23 = TopTrack.create(
  track_id: mischief_08.id,
  artist_id: miguel.id
)

tt24 = TopTrack.create(
  track_id: mischief_05.id,
  artist_id: miguel.id
)

tt25 = TopTrack.create(
  track_id: black_water_11.id,
  artist_id: tinashe.id
)

tt26 = TopTrack.create(
  track_id: in_case_we_die_11.id,
  artist_id: tinashe.id
)

tt27 = TopTrack.create(
  track_id: in_case_we_die_09.id,
  artist_id: tinashe.id
)

tt28 = TopTrack.create(
  track_id: house_of_balloons_05.id,
  artist_id: weeknd.id
)

tt29 = TopTrack.create(
  track_id: house_of_balloons_02.id,
  artist_id: weeknd.id
)

tt30 = TopTrack.create(
  track_id: house_of_balloons_01.id,
  artist_id: weeknd.id
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