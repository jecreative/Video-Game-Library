//* React Router Dom
import { Route } from 'react-router-dom'
//* Styled Components
import GlobalStyles from './components/GlobalStyles'
//* Pages
import Home from './pages/Home'

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Route path={['/game/:id', '/']} component={Home} />
    </div>
  )
}

export default App
