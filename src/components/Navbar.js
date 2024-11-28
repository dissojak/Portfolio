'use client'; // Ensure this is a client-side component

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation'; // This hook gives the current path
import '../app/css/globals.css'; // Ensure the CSS is loaded
import Link from 'next/link';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('about');
  const pathname = usePathname(); // Get the current path from Next.js

  useEffect(() => {
    // Dynamically update the active link based on the current pathname
    if (pathname === '/about') setActiveLink('about');
    else if (pathname === '/resume') setActiveLink('resume');
    else if (pathname === '/portfolio') setActiveLink('portfolio');
    else if (pathname === '/blog') setActiveLink('blog');
    else if (pathname === '/contact') setActiveLink('contact');
  }, [pathname]); // Only re-run when pathname changes

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            href="/about"
            className={`navbar-link ${activeLink === 'about' ? 'active' : ''}`}
            data-nav-link
          >
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/resume"
            className={`navbar-link ${activeLink === 'resume' ? 'active' : ''}`}
            data-nav-link
          >
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/portfolio"
            className={`navbar-link ${activeLink === 'portfolio' ? 'active' : ''}`}
            data-nav-link
          >
            Portfolio
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/blog"
            className={`navbar-link ${activeLink === 'blog' ? 'active' : ''}`}
            data-nav-link
          >
            Blog
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/contact"
            className={`navbar-link ${activeLink === 'contact' ? 'active' : ''}`}
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
