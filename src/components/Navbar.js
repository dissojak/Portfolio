'use client'; // Ensure this is a client-side component

import { useState } from 'react';
import '../app/css/globals.css'; // Ensure the CSS is loaded
import Link from 'next/link';

const Navbar = () => {
  // State to track the active nav link
  const [activeLink, setActiveLink] = useState('about');

  const handleNavClick = (link) => {
    setActiveLink(link); // Update active link when a link is clicked
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            href="/about"
            className={`navbar-link ${activeLink === 'about' ? 'active' : ''}`}
            onClick={() => handleNavClick('about')}
            data-nav-link
          >
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/resume"
            className={`navbar-link ${activeLink === 'resume' ? 'active' : ''}`}
            onClick={() => handleNavClick('resume')}
            data-nav-link
          >
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/portfolio"
            className={`navbar-link ${activeLink === 'portfolio' ? 'active' : ''}`}
            onClick={() => handleNavClick('portfolio')}
            data-nav-link
          >
            Portfolio
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/blog"
            className={`navbar-link ${activeLink === 'blog' ? 'active' : ''}`}
            onClick={() => handleNavClick('blog')}
            data-nav-link
          >
            Blog
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/contact"
            className={`navbar-link ${activeLink === 'contact' ? 'active' : ''}`}
            onClick={() => handleNavClick('contact')}
            data-nav-link
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
