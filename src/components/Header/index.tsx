import React, { useState } from "react";
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import Image from "@/components/UI/Image";
import useCheckMobileScreen from "@/hooks/useCheckMobileScreen";
import { GiHamburgerMenu } from "react-icons/all";
import classNames from "classnames";

const links = [
  { to: "/", name: "Become a cook" },
  { to: "/events", name: "Events" },
  { to: "/", name: "Blog" },
  { to: "/", name: "Login" },
  { to: "/", name: "Registration" },
];

interface HeaderProps {
  linkColor?: "white" | "black";
}

const Header: React.FC<HeaderProps> = ({ linkColor = "white" }) => {
  const isMobile = useCheckMobileScreen();
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="container">
      <div className={styles.nav}>
        <NavLink to={"/"}>
          <Image className={styles.logo} src={"/assets/logo.png"} />
        </NavLink>
        {isMobile ? (
          <>
            <GiHamburgerMenu
              onClick={() => setShowNav((prevState) => !prevState)}
              color={linkColor}
              size={"1.5em"}
            />
            <div
              className={classNames(styles.hiddenPages, showNav && styles.show)}
            >
              {links.map((link, index) => (
                <NavLink key={index} className={styles.hiddenLink} to={link.to}>
                  {link.name}
                </NavLink>
              ))}
            </div>
          </>
        ) : (
          <div className={styles.pages}>
            {links.map((link, index) => (
              <NavLink
                key={index}
                className={classNames(
                  styles.link,
                  linkColor === "black" && styles.black
                )}
                to={link.to}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
