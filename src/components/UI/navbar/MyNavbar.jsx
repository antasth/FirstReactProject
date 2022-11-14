import React from 'react';
import { Link } from 'react-router-dom';

const MyNavbar = () => {
   return (
      <div className='navbar'>
      <div className="navbar__links">
        <Link to='/about'>О сайте</Link>
        <Link to='/posts'>Список постов</Link>
      </div>
    </div>
   );
};

export default MyNavbar;