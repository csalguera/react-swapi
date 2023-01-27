import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import StarshipList from './pages/StarshipList/StarshipList'
import StarshipDetails from './pages/StarshipDetails/StarshipDetails'

function App() {
  return (
    <>
      <Link to='/' className='link'>
        <h1>Star Wars Starships</h1>
      </Link>
      <Routes>
        <Route path='/' element={<StarshipList />} />
        <Route path='/starships' element={<StarshipDetails />} />
      </Routes>
    </>
  )
}

export default App
