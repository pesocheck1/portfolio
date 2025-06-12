import Link from "next/link";
import styles from "./index.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navLinks}>
      <ul>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#profile">Profile</Link>
        </li>
        <li>
          <Link href="#work">Work</Link>
        </li>
        <li>
          <Link href="#skill">Skill</Link>
        </li>
        <li>
          <Link href="#strengths">Strengths</Link>
        </li>
        <li>
          <Link href="#hobby">Hobby</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
