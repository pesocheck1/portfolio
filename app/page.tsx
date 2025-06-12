// List 1 - app/page.tsx

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import AboutPage from "./_components/about";
import ProfilePage from "@/app/_components/profile";
import WorkPage from "@/app/_components/work";
import SkillPage from "@/app/_components/skill";
import StrengthsPage from "@/app/_components/strengths";
import HobbyPage from "@/app/_components/hobby";
import Contact from "@/app/_components/contact";
import ScrollToTopButton from "./_components/ScrollButton";

export default function HomePage() {
  return (
    <main className={styles.container}>
      {/* メインビジュアル */}
      <section className={styles.hero}>
        <Image
          src="/images/main-visual.png"
          alt="Main Visual"
          width={1200}
          height={600}
          className={styles.heroImage}
        />
        {/* <h1 className={styles.title}>DUDNIK ALEKSANDRA | WEB Developer</h1> */}
      </section>

      {/* 各セクションへのリンク */}
      {/* <nav className={styles.navLinks}>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <Link href="/skill">Skill</Link>
          </li>
          <li>
            <Link href="/strengths">Strengths</Link>
          </li>
          <li>
            <Link href="/strengths">Hobby</Link>
          </li>
          <li>
            <Link href="/strengths">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <AboutPage />
      <ProfilePage />
      <WorkPage />
      <SkillPage />
      <StrengthsPage />
      <HobbyPage />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
}
