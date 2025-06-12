import React from "react";
import styles from "./index.module.css";

const Contact: React.FC = () => {
  return (
    <main id="contact" className={styles.container}>
      <h2 className={styles.heading}>Contact me</h2>
      <p className={styles.text}>
        ご覧いただきありがとうございます。
        <br />
        お仕事のご依頼・ご質問などがございましたら、以下のメールにてお気軽にご連絡ください。
      </p>

      <p className={styles.email}>
        <a href="mailto:w24005@osfl.ac.jp">📩w24005@osfl.ac.jp</a>
      </p>

      <p className={styles.note}>できるだけ早くご返信させていただきます。</p>
    </main>
  );
};

export default Contact;
