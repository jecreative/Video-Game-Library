import {
  FETCH_GAMES_REQUEST,
  FETCH_GAMES_SUCCESS,
  FETCH_GAMES_ERROR,
} from '../types/gamesTypes'

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
  loading: true,
}

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES_REQUEST:
      return {
        loading: true,
      }
    case FETCH_GAMES_SUCCESS:
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
        loading: false,
      }
    case FETCH_GAMES_ERROR:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return { ...state }
  }
}

export default gamesReducer
