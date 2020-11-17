//* Types
import {
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_ERROR,
} from '../types/detailsTypes'

//* Initial State
const initialState = { game: {}, screenshots: {}, loading: false }

//* Reducer
const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DETAILS_REQUEST:
      return {
        loading: true,
      }
    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        game: action.payload,
        screenshots: action.payload.screenshots,
        loading: false,
      }
    case FETCH_DETAILS_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return { ...state }
  }
}

export default detailsReducer
