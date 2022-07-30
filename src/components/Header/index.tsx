import React from "react";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import Image from "../UI/Image";
// import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";

const Header = () => {
  // const isMobile = useCheckMobileScreen();

  return (
    // {isMobile ? (
    //     <div className={styles.mobileWrapper}>
    //       <NavLink className={styles.logoLink} to={"/"}>
    //         <div className={styles.logo}>
    //           <img className={styles.logoImage} src={logo} alt="logo" />
    //           <span className={styles.logoTitle}>Agency</span>
    //         </div>
    //       </NavLink>
    //     </div>
    // ) : (
    <div className="container">
      <div className={styles.nav}>
        <NavLink to={"/"}>
          <Image className={styles.logo} src={"/assets/logo.png"} />
        </NavLink>
        <div className={styles.pages}>
          <NavLink className={styles.link} to={"/"}>
            Become a cook
          </NavLink>
          <NavLink className={styles.link} to={"/"}>
            Events
          </NavLink>
          <NavLink className={styles.link} to={"/"}>
            Blog
          </NavLink>
          <NavLink className={styles.link} to={"/"}>
            Login
          </NavLink>
          <NavLink className={styles.link} to={"/"}>
            Registration
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
