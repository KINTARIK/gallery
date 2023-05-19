import React from "react";
import styles from "./ArtItem.module.scss";

export function ArtItem({ name, imageUrl, author, location, created }) {
  return (
    <div className={styles["image-container"]}>
      <img
        src={"https://test-front.framework.team" + imageUrl}
        alt={name}
        className={styles["image"]}
      />
      <div className={styles["caption"]}>
        <div className={styles["caption-title"]}>{name}</div>
        <div className={styles["caption-list"]}>
          <div className={styles["caption-list__item"]}>
            <b>Author:</b>
            {author}
          </div>
          <div className={styles["caption-list__item"]}>
            <b>Created:</b>
            {created}
          </div>
          <div className={styles["caption-list__item"]}>
            <b>Location:</b>
            {location}
          </div>
        </div>
      </div>
    </div>
  );
}
