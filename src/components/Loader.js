//* GIF
import loadingGif from '../img/loader.gif'
//* Styled COmponents
import styled from 'styled-components'

const Loader = () => {
  return (
    <LoadingContainer>
      <LoaderGif src={loadingGif} alt='loading' />
    </LoadingContainer>
  )
}

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
`

const LoaderGif = styled.img`
  width: 100px;
  height: 100px;
`

export default Loader
