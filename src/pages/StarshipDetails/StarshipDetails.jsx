import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getStarshipDetails } from '../../services/sw-api'

import './StarshipDetails.css'


const StarshipDetails = () => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchStarshipDetails = async () => { 
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])

  return (
    <>
      {starshipDetails.length ?
        <>
          <h2>Starship Details</h2>
          <main>
            <div className='details-container'>
              <h3>{starshipDetails.name}</h3>
              <h4>Model: {starshipDetails.model}</h4>
            </div>
          </main>
        </>
      :
        <h2>Loading details...</h2>
      }
    </>
  )
}

export default StarshipDetails