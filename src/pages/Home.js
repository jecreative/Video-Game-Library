//* React
import { useEffect } from 'react'
//* Redux
import { useDispatch, useSelector } from 'react-redux'
import { loadGames } from '../redux/actions/gamesActions'
//* Components
import Game from '../components/Game'
import Loader from '../components/Loader'
//* Styled Components
import styled from 'styled-components'
//* Framer Motion
import { motion } from 'framer-motion'

const Home = () => {
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
            game={game.id}
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
            game={game.id}
            background={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  )
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
`

export default Home
