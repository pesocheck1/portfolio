import styles from "./index.module.css";

export default function SkillPage() {
  return (
    <main id="skill" className={styles.container}>
      <h2 className={styles.heading}>Skill</h2>
      <p className={styles.text}>
        これまで勉強した言語や、現在学習中の技術を紹介します。まだ完璧に理解できていない部分もありますが、日々少しずつ成長を目指しています。
      </p>
      <ul className={styles.skillList}>
        <li>HTML / CSS</li>
        <p className={styles.texts}>
          基本的なコーディング、レスポンシブデザイン、レイアウトに対応可能です。
        </p>
        <li>JavaScript (ES6+)</li>
        <p className={styles.texts}>
          基本文法、配列やオブジェクトの操作、簡単なバリデーション処理などができます。
        </p>
        <li>TypeScript</li>
        <p className={styles.texts}>
          JavaScriptとの違いを意識しながら、型定義やインターフェースの使い方を練習中です。
        </p>
        <li>React / Next.js</li>
        <p className={styles.texts}>
          コンポーネントの作成やpropsの受け渡し、基本的なフックの使い方を学んでいます。ページルーティングや簡単なAPI
          Routesの使い方も勉強しています。
        </p>
        <li>Node.js / Express（現在学習中）</li>
        <p className={styles.texts}>
          フロントエンドに慣れてきたら、バックエンドにも挑戦する予定です。
        </p>
        {/* 自分の学習中・習得済み技術をリストで追加 */}
      </ul>
    </main>
  );
}
