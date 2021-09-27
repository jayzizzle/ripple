import React from 'react';
import HeaderNav from './header_nav';
import { Link } from 'react-router-dom';
import FreeTrialButton from './free_trial_button';

const Splash = () => (
  <>
    <HeaderNav />
    <div className='flex-col-start hero'>
      <h1>Discover the tracks</h1>
      <h1>where it all began.</h1>
      <FreeTrialButton styleClass='btn-hero' />
      <p>Every tidal wave starts out as a ripple.</p>
    </div>
  </>
)

export default Splash;