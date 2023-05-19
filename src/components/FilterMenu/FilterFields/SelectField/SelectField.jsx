import { Select } from "fwt-internship-uikit";
import React, { useState } from "react";
import { cross, crossDark } from "../../../../common/Cross";
import styles from "./SelectField.module.scss";

export function SelectField({
  options,
  setCurrentPage,
  setFilterItems,
  dispatch,
  placeholder,
  isDarkTheme,
}) {
  const [currentValue, setCurrentValue] = useState("");

  const handleChange = (e) => {
    setCurrentValue(e);
    const newId = options.reduce(
      (objKey, elem) => (elem.name === objKey ? elem.id : objKey),
      e
    );
    if (options[0]?.location) {
      dispatch(setFilterItems({ locationId: newId }));
    } else {
      dispatch(setFilterItems({ authorId: newId }));
    }
    dispatch(setCurrentPage(1));
  };

  const clearValue = () => {
    setCurrentValue("");
    if (options[0]?.location) {
      dispatch(setFilterItems({ locationId: "" }));
    } else {
      dispatch(setFilterItems({ authorId: "" }));
    }
  };

  return (
    <div className={styles["field-wrapper"]}>
      <Select
        options={options}
        value={currentValue || placeholder}
        onChange={handleChange}
        isDarkTheme={isDarkTheme}
      />
      {currentValue && (
        <button onClick={clearValue} className={styles["clear-button"]}>
          {isDarkTheme ? crossDark : cross}
        </button>
      )}
    </div>
  );
}
