//* Axios
import axios from 'axios'
//* API
import { gameDetailsURL, gameScreenshotURL } from '../../api'
//* Types
import {
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
  FETCH_DETAILS_ERROR,
} from '../types/detailsTypes'

export const loadDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_DETAILS_REQUEST,
    })

    const detailsData = await axios.get(gameDetailsURL(id))
    const screenshotData = await axios.get(gameScreenshotURL(id))

    dispatch({
      type: FETCH_DETAILS_SUCCESS,
      payload: {
        game: detailsData.data,
        screenshots: screenshotData.data,
      },
    })
  } catch (error) {
    dispatch({
      type: FETCH_DETAILS_ERROR,
      payload: error,
    })
  }
}
