import React from 'react';
import {
  faChartSimple,
  faFileSignature
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks';
import { logout } from '@multiversx/sdk-dapp/utils';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { dAppName } from 'config';
import { routeNames } from 'routes';
import './Navbar.css';
import { ReactComponent as MultiversXLogo } from '../../../assets/img/multiversx.svg';

export const Navbar = () => {
  const isLoggedIn = useGetIsLoggedIn();

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  return (
    <BsNavbar className='bg-dark border-bottom px-4 py-3'>
      <div className='d-flex justify-content-between'>
        <Link
          className='d-flex align-items-center navbar-brand mr-0'
          to={isLoggedIn ? routeNames.dashboard : routeNames.home}
        >
          <MultiversXLogo className='multiversx-logo'/>
        </Link>

        <div className="all-buttons flex-grow-1">
          <div className="centered-buttons">
            <button className="btn-hover color-1">Mine</button>
            <button className="btn-hover color-1">Shop</button>
            <button className="btn-hover color-1">Wallet</button>
          </div>
          <p className='info-paragraph'>Info</p>
          <div className='button-class'>
              <button className="btn-hover color-1">My Power</button>
              <button className="btn-hover color-1">Network Power</button>
              <button className="btn-hover color-1">Block Reward</button>
              <button className="btn-hover color-1">Your Reward</button>
           </div> 
        </div>

        <Nav className='ml-auto'>
          {isLoggedIn && (
            <>
              <NavItem>
                <button className='btn btn-link'>
                  Rank
                </button>
              </NavItem>
            </>
          )}
        </Nav>
      </div>
    </BsNavbar>
  );
};

