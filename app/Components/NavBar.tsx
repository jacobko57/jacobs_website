"use client"

import Link from 'next/link'
import {useState} from 'react'
import NavItem from './NavItem'

const MENU = [
    {text: "Home", href: "/"},
    {text: "GitHub", href: "github"}
]

const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);
  
    return (
      <header>
        <nav className={`nav`}>
          <Link href={"/"}>
            <a>
              <h1 className="logo">CodeWithMarish</h1>
            </a>
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`nav__menu-bar`}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={`${navActive ? "active" : ""} nav__menu-list`}>
            {MENU.map((menu, idx) => (
              <div
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </div>
            ))}
          </div>
        </nav>
      </header>
    );
  };
  
  export default Navbar;