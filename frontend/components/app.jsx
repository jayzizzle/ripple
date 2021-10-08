import React from 'react';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard';
import AlbumDisplay from './dashboard/album_display';
import ArtistDisplay from './dashboard/artist_display';
import PlaylistShowAllContainer from './dashboard/playlists/playlist_show_all_container';
import LoginFormContainer from './session/session_form/login_form_container';
import SignupFormContainer from './session/session_form/signup_form_container';
import PlaylistCreateFormContainer from './dashboard/playlists/playlist_create_form_container';
import PlaylistEditFormContainer from './dashboard/playlists/playlist_edit_form_container';
import FavoriteAlbums from './dashboard/favorites/favorite_albums';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import PlaylistDisplay from './dashboard/playlists/playlist_display';
import AllArtists from './dashboard/all_artists';

const App = () => (
  <div className='full-wrapper'>
    <Switch>
      <ProtectedRoute exact path='/playlists/new' component={PlaylistCreateFormContainer} />
      <ProtectedRoute path='/playlists/:playlistId/edit' component={PlaylistEditFormContainer} />
      <ProtectedRoute path='/playlists/:playlistId/' component={PlaylistDisplay} />
      <ProtectedRoute path='/albums/:albumId' component={AlbumDisplay} />
      <ProtectedRoute path='/artists/:artistId' component={ArtistDisplay} />
      <ProtectedRoute exact path='/artists' component={AllArtists} />
      <ProtectedRoute exact path='/albums' component={FavoriteAlbums} />
      <ProtectedRoute exact path='/playlists' component={PlaylistShowAllContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      <Route path='/' component={Splash} />
    </Switch>
  </div>
);

export default App;