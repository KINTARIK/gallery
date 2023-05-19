import React, { useCallback, useState } from "react";
import debounce from "lodash.debounce";
import { Input } from "fwt-internship-uikit";
import { cross, crossDark } from "../../../../common/Cross";
import styles from "./InputField.module.scss";

export function InputField({
  setCurrentPage,
  setFilterItems,
  dispatch,
  isDarkTheme,
}) {
  const [fieldValue, setFieldValue] = useState("");

  const updateInputValue = useCallback(
    debounce((str) => {
      dispatch(setFilterItems({ name: str }));
    }, 400),
    []
  );

  const handleInputName = useCallback((e) => {
    setFieldValue(e.target.value);
    updateInputValue(e.target.value);
    dispatch(setCurrentPage(1));
  }, []);

  const clearValue = () => {
    setFieldValue("");
    dispatch(setFilterItems({ name: "" }));
  };

  return (
    <div className={styles["field-wrapper"]}>
      <Input
        value={fieldValue || ""}
        onChange={handleInputName}
        placeholder="Name"
        isDarkTheme={isDarkTheme}
      />
      {fieldValue && (
        <button onClick={clearValue} className={styles["clear-button"]}>
          {isDarkTheme ? crossDark : cross}
        </button>
      )}
    </div>
  );
}
