import React from "react";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <a href="#" className="logo">
        Flatlogic
      </a>
      <nav className="nav-menu">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#" className="nav-item">
          Pages <ChevronDownIcon className="chevron-icon" />
        </a>
        <a href="#" className="nav-item">
          Shop <ChevronDownIcon className="chevron-icon" />
        </a>
        <a href="#" className="nav-item">
          Blog <ChevronDownIcon className="chevron-icon" />
        </a>
      </nav>
      <div className="icon-container">
        <a href="#" className="icon-link" title="Search">
          <MagnifyingGlassIcon className="icon" />
        </a>
        <a href="#" className="icon-link" title="Account">
          <UserIcon className="icon" />
        </a>
        <a href="#" className="icon-link" title="Cart">
          <ShoppingCartIcon className="icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;
