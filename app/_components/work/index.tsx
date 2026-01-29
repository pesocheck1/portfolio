import Link from "next/link";
import styles from "./index.module.css";
import Image from "next/image";

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
          <h3>Sweet Cake Bakeshop | 洋菓子店のホームページ制作</h3>
          <br />
          <p>HTMLを使用したシンプルなウェブサイト</p>
          <Link
            href="https://cakeshop-lemon.vercel.app/"
            target="_blank"
            className={styles.link}
          >
            サイトはこちら
          </Link>
          <br />
          <Link
            href="https://github.com/pesocheck1/cakeshop"
            target="_blank"
            className={styles.link}
          >
            GitHubリポジトリはこちら
          </Link>
        </li>
        <li className={styles.workItem}>
          <h3>Sweet Cupcake Shop | お菓子のオンラインショップ制作</h3>
          <br />
          <p>
            TypeScriptを使用した商品カタログと注文機能を備えているお菓子販売サイト
          </p>
          <Link
            href="https://orderapp-eight.vercel.app/"
            target="_blank"
            className={styles.link}
          >
            サイトはこちら
          </Link>
          <br />
          <Link
            href="https://github.com/pesocheck1/orderapp"
            target="_blank"
            className={styles.link}
          >
            GitHubリポジトリはこちら
          </Link>
        </li>
        <li className={styles.workItemlast}>
          <h3>TravelQuest Okinawa | 旅行ルート作成Webアプリ</h3>
          <br />
          <p>沖縄旅行のルートを直感的に楽しく作成できるWebアプリ。</p>
          <p>
            TypeScriptを使用し、地図上でのルート表示や移動距離・時間の計算などを実装。
          </p>
          <p> チームではフロントエンドと画面設計を担当しました。</p>
          <Link
            href="https://travelquestokinawa.vercel.app/"
            target="_blank"
            className={styles.link}
          >
            サイトはこちら
          </Link>
          <br />
          <Link
            href="https://github.com/pesocheck1/travelquest"
            target="_blank"
            className={styles.link}
          >
            GitHubリポジトリはこちら
          </Link>
          <br />
          <Image
            src="/images/screenshot.png"
            alt="travelquest"
            width={700}
            height={500}
            className={styles.screenshot}
          />
        </li>
      </ul>
    </main>
  );
}
