import fetch from "cross-fetch";

/*action types*/
export const ITINERARY_REQUESTED = "ITINERARY_REQUESTED";
export const ITINERARY_RECEIVED = "ITINERARY_RECEIVED";
export const ITINERARY_FAILED = "ITINERARY_FAILED";

/*redux action to retrieve itineraries from MongoDB*/
export function getItineraryAction() {
  return function(dispatch) {
    dispatch({
      type: ITINERARY_REQUESTED
    });
    fetch("http://localhost:5000/itineraries/all")
      .then(response => response.json())
      .then(data =>
        dispatch({
          type: ITINERARY_RECEIVED,
          payload: data
        })
      )
      .catch(error =>
        dispatch({
          type: ITINERARY_FAILED,
          payload: error
        })
      );
  };
}
