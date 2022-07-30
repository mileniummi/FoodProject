import React from "react";
import styles from "./index.module.css";
import Header from "../../Header";

const WelcomeScreen = () => {
  return (
    <div className={styles.background}>
      <Header />
      <div className={"container"}>
        <h1 className={styles.title}>Gastronomic travel</h1>
        <h3 className={styles.subTitle}>
          Book dinners, workshops, tastings, wine tours with locals around the
          world. Create your culinary events.
        </h3>
      </div>
    </div>
  );
};

export default WelcomeScreen;
