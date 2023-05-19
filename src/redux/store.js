import { configureStore } from "@reduxjs/toolkit";
import GalleryReducer from "./reducer/GalleryReducer";
import ArtInfoReducer from "./reducer/ArtInfoReducer";

const store = configureStore({
  reducer: {
    GalleryReducer,
    ArtInfoReducer,
  },
});
export default store;
