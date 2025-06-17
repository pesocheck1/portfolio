"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navbar}>
      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={36} /> : <Menu size={36} />}
      </button>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ""}`}>
        <li>
          <Link href="#about" onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link href="#profile" onClick={closeMenu}>
            Profile
          </Link>
        </li>
        <li>
          <Link href="#work" onClick={closeMenu}>
            Work
          </Link>
        </li>
        <li>
          <Link href="#skill" onClick={closeMenu}>
            Skill
          </Link>
        </li>
        <li>
          <Link href="#strengths" onClick={closeMenu}>
            Strengths
          </Link>
        </li>
        <li>
          <Link href="#hobby" onClick={closeMenu}>
            Hobby
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
