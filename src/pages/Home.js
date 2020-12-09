//* React
import { useEffect } from 'react'
//* React Router Dom
import { useLocation } from 'react-router-dom'
//* Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../redux/actions/gamesActions'
//* Components
import Game from '../components/Game'
import GameDetail from '../components/GameDetail'
import Loader from '../components/Loader'
//* Styled Components
import styled from 'styled-components'
//* Framer Motion
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

const Home = () => {
  //* Get the current location
  const location = useLocation()
  const pathId = location.pathname.split('/')[2]

  //* Games Data
  const dispatch = useDispatch()
  const { popular, newGames, upcoming, loading } = useSelector(
    (state) => state.games
  )

  useEffect(() => {
    dispatch(loadGames())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : (
    <GameList>
      <AnimateSharedLayout type='crossfade'>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        <h2>Upcoming Games</h2>
        <Games>
          {upcoming.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              background={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>Popular Games</h2>
        <Games>
          {popular.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              background={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
        <h2>New Games</h2>
        <Games>
          {newGames.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              background={game.background_image}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  width: 100%;
  padding: 0rem 2rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    padding: 5rem 0rem;
  }
`

const Games = styled(motion.div)`
  min-height: 70vh;
  width: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 2rem;
`

export default Home
