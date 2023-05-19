import React from "react";
import { Logo, sunIcon, sunIconDark } from "../../common";
import styles from "./Header.module.scss";

export function Header({ setDarkTheme, darkTheme }) {
  const switchTheme = () => {
    darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  };

  return (
    <div className={styles["header"]}>
      <Logo />
      <button onClick={switchTheme} className={styles["theme-button"]}>
        {!darkTheme ? sunIcon : sunIconDark}
      </button>
    </div>
  );
}
