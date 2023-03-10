import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './StarshipList.css'

import { getStarshipList } from '../../services/sw-api'

const StarshipList = () => {
  const [starshipList, setStarshipList] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <>
      {starshipList.length ?
        <div className='card-container'>
          {starshipList.map(starship =>
            <Link
            to={`${starship.url.replace('https://swapi.dev/api', '')}`}
            state={{starship}}
            key={starship.name}
            className="link"
            >
              <div className='starship-card'>
                <p>{starship.name}</p>
              </div>
            </Link>
          )}
        </div>
        :
        <>
          <h2>Loading starships...</h2>
        </>
      }
    </>
  )
}

export default StarshipList