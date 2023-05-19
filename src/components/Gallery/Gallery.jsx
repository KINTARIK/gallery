import React, { useEffect } from "react";
import { Pagination } from "fwt-internship-uikit";
import { useDispatch, useSelector } from "react-redux";
import {
  requestPageItems,
  setCurrentPage,
} from "../../redux/reducer/GalleryReducer";
import { ArtItem } from "./ArtItem";
import styles from "./Gallery.module.scss";

export function Gallery({ darkTheme }) {
  const currentPage = useSelector((store) => store.GalleryReducer.currentPage);
  const paintings = useSelector((store) => store.GalleryReducer.data);
  const filter = useSelector((store) => store.GalleryReducer.filter);

  const locations = useSelector((store) => store.ArtInfoReducer.locations);
  const authors = useSelector((store) => store.ArtInfoReducer.authors);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      requestPageItems({
        currentPage,
        name: filter.name,
        authorId: filter.authorId,
        locationId: filter.locationId,
        rangeStart: filter.rangeStart,
        rangeEnd: filter.rangeEnd,
      })
    );
  }, [
    currentPage,
    filter.name,
    filter.authorId,
    filter.locationId,
    filter.rangeStart,
    filter.rangeEnd,
    dispatch,
  ]);

  return (
    <div>
      {!paintings.length && (
        <h1
          className={
            styles["error-message"] +
            " " +
            (darkTheme && styles["error-message--dark"])
          }
        >
          Nothing was found
        </h1>
      )}

      {paintings && (
        <div className={styles["image-container"]}>
          {paintings.map((elem) => (
            <ArtItem
              key={elem.id}
              imageUrl={elem.imageUrl}
              created={elem.created}
              name={elem.name}
              author={authors.reduce((result, e) => {
                return result === e.id ? (result = e.name) : result;
              }, elem.authorId)}
              location={locations.reduce((result, e) => {
                return result === e.id ? (result = e.location) : result;
              }, elem.locationId)}
            />
          ))}
        </div>
      )}

      <Pagination
        className={styles["pagination"]}
        currentPage={currentPage}
        pagesAmount={5}
        isDarkTheme={darkTheme}
        onChange={(e) => dispatch(setCurrentPage(e))}
      />
    </div>
  );
}
