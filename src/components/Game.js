//* Styled Components
import styled from 'styled-components'
//* Framer Motion
import { motion } from 'framer-motion'
//* Redux
import { useDispatch } from 'react-redux'
import { loadDetails } from '../redux/actions/detailsActions'

const Game = ({ name, released, id, background }) => {
  const dispatch = useDispatch()

  const loadDetailshandler = () => {
    dispatch(loadDetails(id))
  }
  return (
    <StyledGame onClick={loadDetailshandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={background} alt={name} />
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 40vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
