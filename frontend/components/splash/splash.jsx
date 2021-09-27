import React from 'react';
import { connect } from 'react-redux';
import HeaderNav from './header_nav';
import { Link } from 'react-router-dom';
import FreeTrialButton from './free_trial_button';

const Splash = (props) => (
  <>
    <HeaderNav />
    <div className='flex-col-start hero-bg'>
    <div className='flex-col-start hero'>
      <h1>Discover the tracks</h1>
      <h1>where it all began.</h1>
      <FreeTrialButton styleClass='btn-hero' isLoggedIn={props.isLoggedIn} />
      <p>Every tidal wave starts out as a ripple.</p>
    </div>
    </div>
  </>
)

const mSTP = state => ({
  isLoggedIn: Boolean(state.session.id)
});

export default connect(mSTP)(Splash);