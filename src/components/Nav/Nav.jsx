import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from "react-icons/io";
import json from '../../imagepaths.json'

import "./Nav.css";

export default function Nav() {

  const [showMenu, setShowMenu] = useState(false);
  const hideMenu = ()=>{
    setShowMenu(false);
  }

  return (
    <>
    <div className="nav">
      <div className="logo">
        <img src={new URL(json.Nav.logo.url, import.meta.url).href} alt="logo" />
      </div>
      <div className="nav-buttons">
        <ul>
          <li>
            <Link to='/'>
              <button>HOME</button>
            </Link>
          </li>
          <li>
            <Link to='/download-app'>
              <button>APP</button>
            </Link>
          </li>
          <li>
            <Link to='/team'>
              <button>OUR TEAM</button>
            </Link>
          </li>
          <li>
            <Link to='/contact-us'>
              <button>CONTACT US</button>
            </Link>
          </li>
          <li>
            <Link to='/register'>
              <button className="register-btn">REGISTER</button>
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <button className="login-btn">LOGIN</button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="nav-burger-switch">
        <button onClick={()=>{
          setShowMenu(!showMenu);
        }}>
          {showMenu ? <IoMdClose /> : <HiMenu /> }
        </button>
      </div>
    </div>
    <div className="nav-burger">
        {showMenu ?
          <>
            <div className="burger-menu">
              <ul>
                <li>
                  <Link to='/'>
                    <button onClick={hideMenu}>HOME</button>
                  </Link>
                </li>
                <li>
                  <Link to='/download-app'>
                    <button onClick={hideMenu}>APP</button>
                  </Link>
                </li>
                <li>
                  <Link to='/underConstruction'>
                    <button onClick={hideMenu}>OUR TEAM</button>
                  </Link>
                </li>
                <li>
                  <Link to='/underConstruction'>
                    <button onClick={hideMenu}>CONTACT US</button>
                  </Link>
                </li>
                <li>
                  <Link to='/underConstruction'>
                    <button className="register-btn" onClick={hideMenu}>REGISTER</button>
                  </Link>
                </li>
                <li>
                  <Link to='/login'>
                    <button className="login-btn" onClick={hideMenu}>LOGIN</button>
                  </Link>
                </li>
              </ul>
            </div>
          </>
          :
          <></>
        }
    </div>
    </>
  );
}
