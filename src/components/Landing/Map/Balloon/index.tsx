import React from "react";
import styles from "./index.module.css";

interface IBalloonProps {
  title: string;
  subtitle?: string;
  img: string;
}

const Balloon: React.FC<IBalloonProps> = ({ title, subtitle, img }) => {
  return (
    <div className={styles.content}>
      <h2 className={styles.title}>{title}</h2>
      <h4 className={styles.subtitle}>{subtitle}</h4>
      <img className={styles.image} src={img} alt="placeMark" />
    </div>
  );
};

export default Balloon;
