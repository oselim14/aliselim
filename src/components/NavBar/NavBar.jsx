import React from 'react';
import { Link } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';
import './NavBar.css';

export default function NavBar(props) {

  function handleLogOut() {
    usersService.logOut();
    props.setUser(null);
  }

  return (
    <nav className={props.selectedButton ? 'selected' : null}>
      <div>
        { props.user && <><Link to="/posts/new">Add a post</Link> &nbsp; | &nbsp;</> }
        <Link to="/" className="odd-link ali-nav">Ali Selim</Link>
      </div>
      <div>
        <Link to="/spoken">This</Link>
        &nbsp; | &nbsp;
        <Link to="/written" className="odd-link">That</Link>
        &nbsp; | &nbsp;
        <Link to="/visual">The Other Thing</Link>
        &nbsp; | &nbsp;
        <Link to="/contact" className="odd-link">Where am I?</Link>
        { props.user && <>&nbsp; | &nbsp; <Link to="" onClick={handleLogOut}>Logout</Link></> }
      </div>
    </nav>
  );
}