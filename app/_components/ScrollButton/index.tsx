"use client";

import React from "react";
import styles from "./index.module.css";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // плавная прокрутка
    });
  };

  return (
    <button className={styles.button} onClick={scrollToTop}>
      ↑ 上へ戻る
    </button>
  );
};

export default ScrollToTopButton;
