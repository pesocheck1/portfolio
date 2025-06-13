import styles from "./index.module.css";
import { getIcons } from "@/app/_libs/microcms";
import Image from "next/image";

interface IconType {
  name: string;
  image: {
    url: string;
  };
}

export default async function SkillPage() {
  const icons: IconType[] = await getIcons();

  console.log(icons.map((icon) => icon.image.url));

  // Теперь ищем по name
  const findIcon = (name: string): IconType | undefined => {
    return icons.find((icon) => icon.name === name);
  };

  function renderIcon(name: string, alt: string) {
    const icon = findIcon(name);
    if (!icon || !icon.image?.url) return null;

    const iconUrlWithCacheBuster =
      icon.image.url + "?v=" + new Date().getTime();

    return (
      <span className={styles.imageWrapper}>
        <Image
          src={icon.image.url}
          alt={alt}
          fill
          style={{ objectFit: "contain" }}
          className={styles.icon}
        />
      </span>
    );
  }

  return (
    <main id="skill" className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        これまで勉強した言語や、現在学習中の技術を紹介します。まだ完璧に理解できていない部分もありますが、日々少しずつ成長を目指しています。
      </p>
      <ul className={styles.skillList}>
        <li>
          {renderIcon("html", "HTML")}
          HTML / {renderIcon("css", "CSS")}CSS
        </li>
        <p className={styles.texts}>
          基本的なコーディング、レスポンシブデザイン、レイアウトに対応可能です。
        </p>

        <li>
          {renderIcon("javascript", "JavaScript")}
          JavaScript (ES6+)
        </li>
        <p className={styles.texts}>
          基本文法、配列やオブジェクトの操作、簡単なバリデーション処理などができます。
        </p>

        <li>
          {renderIcon("typescript", "TypeScript")}
          TypeScript
        </li>
        <p className={styles.texts}>
          JavaScriptとの違いを意識しながら、型定義やインターフェースの使い方を練習中です。
        </p>

        <li>
          {renderIcon("react", "React")}
          React / {renderIcon("nextjs", "NextJS")}Next.js
        </li>
        <p className={styles.texts}>
          コンポーネントの作成やpropsの受け渡し、基本的なフックの使い方を学んでいます。ページルーティングや簡単なAPI
          Routesの使い方も勉強しています。
        </p>

        <li>
          {renderIcon("nodejs", "Node.js")}
          Node.js / Express（現在学習中）
        </li>
        <p className={styles.texts}>
          フロントエンドに慣れてきたら、バックエンドにも挑戦する予定です。
        </p>
      </ul>
    </main>
  );
}
