//* Redux
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

//* Reducers
import gamesReducer from './reducers/gamesReducers'

//* Middleware
import thunk from 'redux-thunk'
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  games: gamesReducer,
})

const store = createStore(rootReducer, composeEnchancer(applyMiddleware(thunk)))

export default store
