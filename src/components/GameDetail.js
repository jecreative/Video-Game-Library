//* React Router Dom
import { useHistory } from 'react-router-dom'
//* Redux
import { useSelector } from 'react-redux'
//* Styled Components
import styled from 'styled-components'
//* Framer Motion
import { motion } from 'framer-motion'
//* Util
import { smallImage } from '../util'
//* Icons
import apple from '../img/apple.svg'
import gamepad from '../img/gamepad.svg'
import nintendo from '../img/nintendo.svg'
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'
//* Star Images
import starEmpty from '../img/star-empty.png'
import starFull from '../img/star-full.png'

const GameDetail = ({ pathId }) => {
  const history = useHistory()

  //* Get Details Data
  const { game, screenshots, loading } = useSelector((state) => state.details)

  //* Exit Detail Handler
  const exitDetailHandler = (e) => {
    const element = e.target
    if (element.classList.contains('shadow')) {
      document.body.style.overflow = 'auto'
    }
    history.push('/')
  }

  //* Get Platform Images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'Playstation 4':
        return playstation
      case 'Xbox One':
        return xbox
      case 'PC':
        return steam
      case 'Nintendo Switch':
        return nintendo
      case 'iOS':
        return apple
      default:
        return gamepad
    }
  }

  //* Get Review Star Rating
  const getStars = () => {
    const stars = []
    const rating = Math.floor(game.rating)
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img src={starFull} alt='star' key={i} />)
      } else {
        stars.push(<img src={starEmpty} alt='star' key={i} />)
      }
    }
    return stars
  }

  return (
    !loading && (
      <CardShadow className='shadow' onClick={exitDetailHandler}>
        <Detail layoutId={pathId}>
          <Stats>
            <div className='rating'>
              <h3>{game.name}</h3>
              <p>Rating: {game.rating}</p>
              {getStars()}
            </div>
            <Info>
              <motion.h3 layoutId={`title ${pathId}`}>Platforms</motion.h3>
              <Platforms>
                {game.platforms.map((data) => (
                  <img
                    key={data.platform.id}
                    src={getPlatform(data.platform.name)}
                    alt={data.platform.name}
                  />
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            <motion.img
              layoutId={`image ${pathId}`}
              src={smallImage(game.background_image, 1280)}
              alt={game.name}
            />
          </Media>
          <Description>
            <p>{game.description_raw}</p>
          </Description>
          <Gallery>
            {screenshots.results.map((screen) => (
              <img
                src={smallImage(screen.image, 1280)}
                key={screen.id}
                alt='game'
              />
            ))}
          </Gallery>
        </Detail>
      </CardShadow>
    )
  )
}

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`
const Detail = styled(motion.div)`
  width: 80%;
  min-height: 100vh;
  border-radius: 1rem;
  padding: 2rem 5rem;
  margin-top: 3rem;
  background: white;
  position: absolute;
  left: 10%;
  color: black;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
`
const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: space-between;
    justify-content: space-between;
    p {
      display: none;
    }
  }
  .rating img {
    width: 1rem;
    height: 1rem;
    display: inline;
    @media (max-width: 768px) {
      display: none;
    }
  }
`
const Info = styled(motion.div)`
  text-align: right;
  @media (max-width: 768px) {
    h3 {
      display: none;
    }
  }
`
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;

  img {
    margin-left: 3rem;
    width: 30px;
    @media (max-width: 768px) {
      margin-left: 1rem;
      width: 20px;
    }
  }
`

const Media = styled(motion.div)`
  margin-top: 5rem;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
    @media (max-width: 768px) {
      height: 30vh;
    }
  }
`

const Description = styled(motion.div)`
  margin: 5rem 0rem;
  @media (max-width: 768px) {
    margin: 2.5rem 0rem;
  }
`

const Gallery = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
  @media (max-width: 768px) {
    img {
      width: 70%;
      margin: 0 auto;
    }
  }
`

export default GameDetail
