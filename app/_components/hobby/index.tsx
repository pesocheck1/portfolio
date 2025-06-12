import Image from "next/image";
import styles from "./index.module.css";

export default function HobbyPage() {
  return (
    <main id="hobby" className={styles.container}>
      <h2 className={styles.heading}>My Hobbies</h2>
      <section className={styles.profileSection}>
        <Image
          src="/images/hobby1.png"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <h2>ヨガ</h2>
          <p>
            心と体のバランスを整えるために、日々ヨガを取り入れています。リラックスしながら柔軟性と集中力を高めています。
          </p>
        </div>
      </section>
      <section className={styles.profileSection}>
        <Image
          src="/images/hobby2.png"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <h2>写真撮影</h2>
          <p>
            日常の風景や特別な瞬間を写真に収めるのが好きです。構図や光の使い方を工夫し、自分らしい表現を楽しんでいます。
          </p>
        </div>
      </section>
      <section className={styles.profileSection}>
        <Image
          src="/images/hobby3.png"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <h2>旅行</h2>
          <p>
            新しい場所を訪れ、現地の文化や自然に触れることで多くの刺激を得ています。旅先での出会いや発見が新たなインスピレーションとなります。
          </p>
        </div>
      </section>
      <section className={styles.profileSection}>
        <Image
          src="/images/hobby4.png"
          alt="My Profile"
          width={200}
          height={200}
          className={styles.profileImage}
        />
        <div className={styles.profileText}>
          <h2>お菓子作り</h2>
          <p>
            季節の素材を使ってお菓子を作る時間が好きです。見た目も味も楽しめるスイーツ作りにこだわっています。
          </p>
        </div>
      </section>
    </main>
  );
}
