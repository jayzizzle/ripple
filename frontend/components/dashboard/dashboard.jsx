import React from 'react';
import Player from '../player/player';
import MainContainer from './main_container';
import Sidebar from './sidebar';


const Dashboard = () => (
  <>
    <Sidebar />
    <MainContainer />
    <Player />
    <div className='end-clear'></div>
  </>
)

export default Dashboard;