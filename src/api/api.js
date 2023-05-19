import axios from "axios";
const BASE_URL = "https://test-front.framework.team/paintings/?";
const AUTHORS_URL = "https://test-front.framework.team/authors/";
const LOCATIONS_URL = "https://test-front.framework.team/locations/";
export const getArtInfo = async () => {
  const authors = await axios.get(AUTHORS_URL).then((response) => {
    return {
      data: response.data,
    };
  });
  const locations = await axios.get(LOCATIONS_URL).then((response) => {
    return {
      data: response.data,
    };
  });
  return { authors, locations };
};
export const getGalleryData = async ({
  currentPage = 1,
  name,
  authorId,
  locationId,
  rangeStart,
  rangeEnd,
}) => {
  const request = await axios
    .get(
      BASE_URL +
        "_page=" +
        currentPage +
        "&_limit=12" +
        (name ? "&q=" + name : "") +
        (authorId ? "&authorId=" + authorId : "") +
        (locationId ? "&locationId=" + locationId : "") +
        (rangeStart ? "&created_gte=" + rangeStart : "") +
        (rangeEnd ? "&created_lte=" + rangeEnd : "")
    )
    .then((response) => {
      return {
        data: response.data,
        filter: { name, authorId, locationId, rangeStart, rangeEnd },
      };
    });
  return request;
};
