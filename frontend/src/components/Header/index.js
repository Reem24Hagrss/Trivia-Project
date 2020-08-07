import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './style.css';

class Header extends Component {

  render() {
    return (
      <div className="header-section">
          <Link to='/' className='title'> Udacitrivia </Link>
          <Link to='/'> List </Link>
          <Link to='/add'> Add </Link>
          <Link to='/play'> Play </Link>
      </div>
    );
  }
}

export default Header;
