import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getPilots } from "../services/sw-api";

import './PilotList.css'

const PilotList = () => {
  const [pilots, setPilots] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchPilots = async () => {
      const pilotData = await getPilots(location.state.starship.pilots)
      setPilots(pilotData)
    }
    fetchPilots()
  }, [location.state.starship.pilots])

  return (
    <>
      <h4>Pilots: </h4>
      {pilots.length ?
        <>
          {pilots.map(pilot =>
            <div className="pilots-container" key={pilot.name}>
              <p className="pilot-name">{pilot.name}</p>
            </div>
          )}
        </>
        :
        <p>No pilots</p>
      }
    </>
  )
}

export default PilotList