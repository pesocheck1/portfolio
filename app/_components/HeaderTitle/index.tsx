import Link from "next/link";
import styles from "./index.module.css";

export default function HeaderTitle() {
  return (
    <h1 className={styles.title}>
      <Link href="/" className={styles.link}>
        DUDNIK ALEKSANDRA | WEB Developer
      </Link>
    </h1>
  );
}
