"use client";

import { usePathname } from "next/navigation";
// import '../app/css/globals.css';
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname(); // Get the current path
  // console.log("pathname is : ",pathname === "/");
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link
            href="/about"
            className={`navbar-link ${
              pathname === "/" || pathname.includes("/about") ? "active" : ""
            }`}
            data-nav-link
          >
            About
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/resume"
            className={`navbar-link ${
              pathname.includes("/resume") ? "active" : ""
            }`}
            data-nav-link
          >
            Resume
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/portfolio"
            className={`navbar-link ${
              pathname.includes("/portfolio") ? "active" : ""
            }`}
            data-nav-link
          >
            Portfolio
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/blog"
            className={`navbar-link ${
              pathname.includes("/blog") ? "active" : ""
            }`}
            data-nav-link
          >
            Blog
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            href="/contact"
            className={`navbar-link ${
              pathname.includes("/contact") ? "active" : ""
            }`}
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
