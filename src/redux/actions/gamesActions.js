//* Axios
import axios from 'axios'
//* API
import { popularGamesURL, newGamesURL, upcomingGamesURL } from '../../api'
//* Types
import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR,
} from '../types/gamesTypes'

//* Actions Creator
export const loadGames = () => async (dispatch) => {
  try {
    dispatch({
      type: FETCH_GAMES_REQUEST,
    })

    //* Fetch Popular games
    const popularData = await axios.get(popularGamesURL())
    const upcomingData = await axios.get(upcomingGamesURL())
    const newGamesData = await axios.get(newGamesURL())

    dispatch({
      type: FETCH_GAMES_SUCCESS,
      payload: {
        popular: popularData.data.results,
        upcoming: upcomingData.data.results,
        newGames: newGamesData.data.results,
      },
    })
  } catch (error) {
    dispatch({
      type: FETCH_GAMES_ERROR,
      payload: error,
    })
  }
}
