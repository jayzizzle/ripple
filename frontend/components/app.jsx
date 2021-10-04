import React from 'react';
import Splash from './splash/splash';
import Dashboard from './dashboard/dashboard';
import AlbumDisplay from './dashboard/album_display';
import ArtistDisplay from './dashboard/artist_display';
import PlaylistShowAllContainer from './dashboard/playlists/playlist_show_all_container';
import PlaylistForms from './dashboard/playlists/playlist_forms';
import LoginFormContainer from './session/session_form/login_form_container';
import SignupFormContainer from './session/session_form/signup_form_container';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className='full-wrapper'>
    <Switch>
      <ProtectedRoute path='/albums/:albumId' component={AlbumDisplay} />
      <ProtectedRoute path='/artists/:artistId' component={ArtistDisplay} />
      <ProtectedRoute exact path='/playlists/new' component={PlaylistForms} />
      <ProtectedRoute exact path='/playlists' component={PlaylistShowAllContainer} />
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} />
      <ProtectedRoute exact path='/dashboard' component={Dashboard} />
      <Route path='/' component={Splash} />
    </Switch>
  </div>
);

export default App;