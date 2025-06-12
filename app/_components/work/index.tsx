import Link from "next/link";
import styles from "./index.module.css";

export default function WorkPage() {
  return (
    <main id="work" className={styles.container}>
      <h2 className={styles.heading}>Work</h2>
      <p className={styles.text}>
        ここでは、私がこれまでに制作してきたアプリやウェブサイトをご紹介します。
      </p>
      <p className={styles.text}>
        それぞれの作品には、私がデザインや機能面で工夫したポイントや、開発の際に直面した課題とその解決方法なども合わせて記載しています。
      </p>
      <p className={styles.text}>
        ユーザーの使いやすさを第一に考え、デザインの美しさと操作性の両立を目指して制作しています。
      </p>
      <p className={styles.text}>
        もし気になるプロジェクトやご質問がありましたら、お気軽にお問い合わせください。
      </p>
      <p className={styles.text}>どうぞごゆっくりご覧ください。</p>
      <ul className={styles.workList}>
        <li className={styles.workItem}>
          <h3>企業サイト制作</h3>
          <br />
          <p>TypeScriptを使用したポートフォリオサイト</p>
          <Link
            href="https://github.com/pesocheck1/project1"
            target="_blank"
            className={styles.link}
          >
            GitHub リポジトリはこちら
          </Link>
        </li>
        <li className={styles.workItem}>
          <h3>洋菓子店のホームページ制作</h3>
          <br />
          <p>HTMLを使用したシンプルなウェブサイト</p>
          <Link
            href="https://github.com/pesocheck1/cakeshop"
            target="_blank"
            className={styles.link}
          >
            GitHub リポジトリはこちら
          </Link>
        </li>
        {/* 必要に応じてリストを追加 */}
      </ul>
    </main>
  );
}
