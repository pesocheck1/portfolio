// components/Header.jsx
import HeaderTitle from "@/app/_components/HeaderTitle";
import Menu from "@/app/_components/Menu";
import styles from "./index.module.css";

export default function Header() {
  return (
    <header className={styles.headermain}>
      <HeaderTitle />
      <Menu />
    </header>
  );
}
