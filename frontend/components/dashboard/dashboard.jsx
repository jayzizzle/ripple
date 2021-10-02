import React from 'react';
import Player from '../player/player';
import MainContainer from './main_container';
import Sidebar from './sidebar';


const Dashboard = () => (
  <>
    <Sidebar />
    <MainContainer />
    <Player />
  </>
)

export default Dashboard;