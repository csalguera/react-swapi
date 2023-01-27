import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './components/StarshipDetails/StarshipDetails'

function App() {
  return (
    <>
      <Link to='/' className='link'>
        <h1>Star Wars Starships</h1>
      </Link>
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starship' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App
