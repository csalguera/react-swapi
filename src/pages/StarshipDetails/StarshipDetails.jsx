import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getStarshipDetails } from '../../services/sw-api'


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
      <h2>Starship Details</h2>
      <h3>{starshipDetails.name}</h3>
    </>
  )
}

export default StarshipDetails