import React from 'react';
import { useHistory } from 'react-router-dom';

const FreeTrialButton = (props) => {
  const history = useHistory();
  const handleClick = () => (history.push('/signup'))
  
  return (
    <button className={props.styleClass} onClick={handleClick}>
      Start Free Trial
    </button>
  );
};

export default FreeTrialButton;