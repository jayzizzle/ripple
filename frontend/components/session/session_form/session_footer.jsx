import React from 'react';
import { Link } from 'react-router-dom';

class SessionFooter extends React.Component {
  render() {
    return(
      <div className='flex-row-center'>
        <footer className='flex-row-between text-small'>
          <p>© 2021 Jon Zamora JZ</p>
          <ul className='flex-row-center'>
            <li className='footer-links'>
              <a 
                href='http://github.com/jayzizzle' 
                target='_blank'
                className='nav-bar-links'
              >GitHub</a>
            </li>
            <li className='footer-links'>
              <a 
                href='https://linkedin.com/in/jon-zamora-97a8a6219/' 
                target='_blank'
                className='nav-bar-links'
              >LinkedIn</a>
            </li>
            <li className='footer-links'>
              <a 
                href='https://mixcloud.com/jonzamora' 
                target='_blank'
                className='nav-bar-links'
              >Mixcloud</a>
            </li>
          </ul>
        </footer>
      </div>
    )
  }
}

export default SessionFooter;