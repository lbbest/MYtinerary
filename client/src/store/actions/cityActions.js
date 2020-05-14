import fetch from "cross-fetch";

/*action types*/
export const CITY_REQUESTED = "CITY_REQUESTED";
export const CITY_RECEIVED = "CITY_RECEIVED";
export const CITY_FAILED = "CITY_FAILED";

/*redux action to retrieve cities from MongoDB*/
export function getCityAction() {
  return function (dispatch) {
    dispatch({
      type: CITY_REQUESTED,
    });
    fetch("http://localhost:5000/cities/all")
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: CITY_RECEIVED,
          payload: data,
        })
      )
      .catch((error) =>
        dispatch({
          type: CITY_FAILED,
          payload: error,
        })
      );
  };
}
