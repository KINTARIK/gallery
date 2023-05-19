import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { Range } from "fwt-internship-uikit";
import { cross, crossDark } from "../../../../common/Cross";
import styles from "./RangeField.module.scss";

export function RangeField({
  setCurrentPage,
  setFilterItems,
  dispatch,
  isDarkTheme,
}) {
  const [from, setFrom] = useState("");
  const [before, setBefore] = useState("");

  const updateDateValue = useCallback(
    debounce((str, dest) => {
      if (dest === "from") {
        dispatch(setFilterItems({ rangeStart: str }));
      } else {
        dispatch(setFilterItems({ rangeEnd: str }));
      }
    }, 400),
    []
  );

  const handleInput = (e) => {
    if (e.target.placeholder === "from") {
      setFrom(e.target.value);
      updateDateValue(e.target.value, "from");
    } else {
      setBefore(e.target.value);
      updateDateValue(e.target.value, "before");
    }
    dispatch(setCurrentPage(1));
  };

  const clearValue = () => {
    setFrom("");
    setBefore("");
    dispatch(setFilterItems({ rangeStart: "", rangeEnd: "" }));
  };

  return (
    <div className={styles["range-wrapper"]}>
      <Range onClose={() => {}} value="Created" isDarkTheme={isDarkTheme}>
        <input
          className={
            styles["range__input"] +
            " " +
            (isDarkTheme && styles["range__input--dark"])
          }
          placeholder="from"
          type={"number"}
          value={from}
          onChange={handleInput}
        />
        <span className={styles["dash"]} />
        <input
          className={
            styles["range__input"] +
            " " +
            (isDarkTheme && styles["range__input--dark"])
          }
          placeholder="before"
          type={"number"}
          value={before}
          onChange={handleInput}
        />
      </Range>
      {(from || before) && (
        <button onClick={clearValue} className={styles["clear-button"]}>
          {isDarkTheme ? crossDark : cross}
        </button>
      )}
    </div>
  );
}
