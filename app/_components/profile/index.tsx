import Image from "next/image";
import styles from "./index.module.css";

export default function ProfilePage() {
  return (
    <main id="profile" className={styles.container}>
      <h2 className={styles.heading}>Profile</h2>
      <section className={styles.profileSection}>
        <Image
          src="/images/profile.jpg"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <p>
            <strong>名前：</strong>DUDNIK ALEKSANDRA
          </p>
          <p>
            <strong>年齢：</strong>30歳
          </p>
          <p>
            <strong>学校：</strong>専門学校沖縄ビジネス外語学院
          </p>
          <p>
            <strong>専攻：</strong>Webプログラミングコース
          </p>
          <p>
            <strong>現在：</strong>エンジニアを目指して日々勉強中
          </p>
        </div>
      </section>

      <section className={styles.hobbySection}>
        <h3 className={styles.subHeading}>趣味</h3>
        <div className={styles.hobbyList}>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/hobby1.png"
              alt="趣味1"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>ヨガ</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/hobby2.png"
              alt="趣味2"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>写真撮影</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/hobby3.png"
              alt="趣味3"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>旅行</p>
          </article>
          <article className={styles.hobbyItem}>
            <Image
              src="/images/hobby4.png"
              alt="趣味3"
              width={150}
              height={150}
              className={styles.hobbyImage}
            />
            <p className={styles.hobbyText}>お菓子作り</p>
          </article>
          {/* 必要に応じてカードを追加 */}
        </div>
      </section>
    </main>
  );
}
