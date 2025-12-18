import React from 'react';
import ButtonNav from '../atoms/ButtonNav';
import './Navbar.css';

const Navbar = ({ onShowList, onShowCreate }) => {
  return (
    <nav className="navbar-full">
      <div className="navbar-content">
        <h1 className="navbar-logo">Empowerment Phrases</h1>

        <div className="navbar-links">
          <ButtonNav text="Start" onClick={onShowList} />
          <ButtonNav text="Create your Phrase" onClick={onShowCreate} />
          <ButtonNav text="About Us" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;