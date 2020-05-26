// components/Layout.js
import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';
import Link from "next/link";
import './Layout.css';

export default function Layout(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuArray = [
    { label: 'HOME', path: '/' },
    { label: 'BUILD YOUR BUSINESS', path: '/build_business' },
    { label: 'PROGRAMS', path: '/programs' },
    { label: 'TALK SHOW', path: '/talk_show' },
    { label: 'BLOGS', path: '/blogs' },
  ]
  return (
    <div className="Layout">
      <Navbar light color="dark" className="menuBar" expand="md">
        <NavbarBrand href="/">
          Neha Tripathi
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {menuArray.map((x, i) =>
              <NavItem key={i} className="menu">
                <Link href={x.path}>
                  <a>{x.label}</a>
                </Link>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      <div className="Content">{props.children}</div>
    </div>
  );
};

// export default Layout;