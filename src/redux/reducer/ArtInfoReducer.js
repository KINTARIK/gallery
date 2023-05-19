import { getArtInfo } from "../../api/api";

const LOAD_INFO = "LOAD_INFO";
const initialState = {
  authors: [],
  locations: [],
};
function ArtInfoReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_INFO:
      return {
        authors: action.payload.authors,
        locations: action.payload.locations,
      };
    default:
      return state;
  }
}
export const setArtInfo = (infoData) => ({
  type: LOAD_INFO,
  payload: infoData,
});
export const requestArtInfo = () => {
  return async (dispatch) => {
    const data = await getArtInfo();
    dispatch(
      setArtInfo({ authors: data.authors.data, locations: data.locations.data })
    );
  };
};
export default ArtInfoReducer;
