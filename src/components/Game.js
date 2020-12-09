//* React Router Dom
import { Link } from 'react-router-dom'
//* Styled Components
import styled from 'styled-components'
//* Framer Motion
import { motion } from 'framer-motion'
//* Redux
import { useDispatch } from 'react-redux'
import { loadDetails } from '../redux/actions/detailsActions'
//* Util
import { smallImage } from '../util'

const Game = ({ name, released, id, background }) => {
  const dispatch = useDispatch()

  const loadDetailshandler = () => {
    document.body.style.overflow = 'hidden'
    dispatch(loadDetails(id))
  }
  return (
    <StyledGame layoutId={id && id.toString()} onClick={loadDetailshandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={id && `title ${id.toString()}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={id && `image ${id.toString()}`}
          src={smallImage(background, 640)}
          alt={name}
        />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 40vh;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
