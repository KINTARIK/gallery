import React, { useState } from "react";
import styles from "./App.module.scss";
import "./styles";
import { FilterMenu, Gallery, Header } from "./components";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={styles["App"] + " " + (darkTheme && styles["App--dark"])}>
      <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      <FilterMenu darkTheme={darkTheme} />
      <Gallery darkTheme={darkTheme} />
    </div>
  );
}
export default App;
