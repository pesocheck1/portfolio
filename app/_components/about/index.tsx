// List 2 - app/about/page.tsx

import Image from "next/image";
import styles from "./index.module.css";

export default function AboutPage() {
  return (
    <main id="about" className={styles.container}>
      <h2 className={styles.heading}>About</h2>
      <p className={styles.text}>
        このサイトは、DUDNIK ALEKSANDRAのポートフォリオです。
      </p>
      <p className={styles.text}>
        ウェブ開発の学習成果や制作したプロジェクトを紹介しています。
      </p>
      <p className={styles.text}>
        フロントエンドを中心に、ReactやNext.jsなどの技術を使って開発を行っています。
      </p>
      <p className={styles.text}>
        デザインにもこだわり、使いやすく美しいウェブサイト作りを目指しています。
      </p>
      <p className={styles.text}>
        現在、日本でエンジニアとしてのキャリアを築くために日々努力しています。
      </p>

      {/* <section className={styles.imageSection}>
        <Image
          src="/images/profile.jpg"
          alt="About Image"
          width={800}
          height={400}
          className={styles.image}
        />
      </section> */}
    </main>
  );
}
