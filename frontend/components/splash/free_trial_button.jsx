import React from 'react';
import { useHistory } from 'react-router-dom';

const FreeTrialButton = (props) => {
  const history = useHistory();
  let nextPage;
  props.isLoggedIn ? (nextPage = '/dashboard') : (nextPage = '/signup');
  const handleClick = () => (history.push(nextPage));
  return (
    <button className={props.styleClass} onClick={handleClick}>
      Start Free Trial
    </button>
  );
};

export default FreeTrialButton;