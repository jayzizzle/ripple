import React from 'react';
import LogOutButton from './logout_button';
import Player from '../player/player';
import SessionFooter from '../session/session_form/session_footer';

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
    <LogOutButton />
    <Player />
  </>
)

export default Dashboard;