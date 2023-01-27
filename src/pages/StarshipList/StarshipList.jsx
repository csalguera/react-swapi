import React, { useState, useEffect } from 'react';
import { getStarshipList } from '../../services/sw-api';

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
            <div className='starship-card' key={starship.name}>
              {starship.name}
            </div>
          )}
        </div>
        :
        <>
          <h4>Loading starships...</h4>
        </>
      }
    </>
  )
}

export default StarshipList