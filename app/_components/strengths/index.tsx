import styles from "./index.module.css";

export default function StrengthsPage() {
  return (
    <main id="strengths" className={styles.container}>
      <h2 className={styles.heading}>Strengths</h2>
      <p className={styles.text}>
        現在はまだIT分野での経験や制作実績は多くありませんが、これまでの経験や性格を活かし、日々スキルの向上に取り組んでいます。
      </p>

      {/* 聞く力 */}
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>聞く力と共感力</h3>
        <p className={styles.strengthText}>
          相手の立場に立って話を聞き、丁寧に対応することを大切にしています。異文化の中で生活する中で、言葉以外のニュアンスや気遣いにも敏感になり、自然と相手の気持ちをくみ取ることができるようになりました。
        </p>
      </section>

      {/* 論理的思考 */}
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>観察力と美的感覚</h3>
        <p className={styles.strengthText}>
          日本の美意識や「かわいい」と感じる感性に共感し、日常の中にある細やかな美しさに気づくのが得意です。色使いやレイアウト、雰囲気のあるビジュアルを意識しながら、見る人に心地よさを与えるデザインを目指しています。
        </p>
      </section>

      {/* 探究心 */}
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>好奇心と継続力</h3>
        <p className={styles.strengthText}>
          新しいことに対する興味が強く、疑問に思ったことはすぐに調べて自分で試してみます。プログラミングやデザインも未経験からのスタートでしたが、毎日少しずつ学びながら、自分のペースでスキルアップを続けています。
        </p>
      </section>

      {/* 言語 */}
      <section className={styles.strengthSection}>
        <h3 className={styles.subHeading}>語学力と異文化理解</h3>
        <p className={styles.strengthText}>
          ロシア出身で、日本での生活や学習を通じて日本語でのコミュニケーション力を伸ばしています。英語での日常会話も可能で、異なる文化的背景を持つ人々とのやりとりにも柔軟に対応できます。
        </p>
      </section>
    </main>
  );
}
