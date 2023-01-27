import { useEffect, useState } from 'react';
import './App.css';
import { getStarshipList } from './services/sw-api';

function App() {
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
      <h1>Star Wars Starships</h1>
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
  );
}

export default App;
