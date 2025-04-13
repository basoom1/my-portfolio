import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="About">
      <h2 className={styles.title}>Recent Certificates</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="pic"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>MKT101</h3>
              <p>
                I completed the MKT101 course and received a certificate. The course covered key marketing concepts like consumer behavior, market research, and digital strategies, providing me with practical skills for future opportunities.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>OOP</h3>
              <p>
                I completed an Object-Oriented Programming (OOP) course and received a certificate. The course taught me essential OOP principles, including classes, inheritance, polymorphism, and encapsulation, enhancing my programming skills for more efficient and scalable code development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>SQL</h3>
              <p>
                I completed an SQL course and received a certificate. The course covered key concepts such as database management, querying, joins, and data manipulation, equipping me with the skills to manage and analyze data effectively.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};