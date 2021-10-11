import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-container" id="sidebar">
        <h3 className="sidebar-title">
        <Link to="/">Home</Link>
        </h3>
        <ul className="sidebar-list">
          <li><Link to="/github-search">Github Search</Link></li>
          <li><Link to="/todo-list">Todo List</Link></li>
          <li><Link to="/posts-fetch">Fetch Posts</Link></li>
          <li><Link to="/image-search">Image Search</Link></li>
        </ul>
      </div>
      {/* <div className="btn-closed" id="btnClose">
          <img src="./chevron-double-right.svg" alt="menu-icon" />
        </div> */}
    </>
  )
}

export default Sidebar;
