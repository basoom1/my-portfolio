import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Basma</h1>
        <p className={styles.description}>
          I'm a current student at King Abdulaziz University ,My major is Mangement Information System -its where tech meets business-
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Scroll down
        </a>
      </div>
      <img
        src={getImageUrl("assets/hero/heroImage.png")}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};