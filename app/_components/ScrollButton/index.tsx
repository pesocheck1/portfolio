"use client";

import React from "react";
import styles from "./index.module.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={styles.button} onClick={scrollToTop}>
      <FaArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
