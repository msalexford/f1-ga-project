// import styles
import './styles.css'
// import hooks useState and useState from react
import { useState, useRef, useEffect } from 'react'
// import StandingList component
import StandingList from './components/StandingList'
// import dropdown component
import Dropdown from './components/Dropdown'
// import axios to fetch api
import axios from 'axios'
// import global variables
import { BASE_URL } from './globals'
// import d3
import * as d3 from 'd3'
import { hierarchy, svg } from 'd3'
import { select } from 'd3'

function App() {
  // for drop down menu
  const [selected, setSelected] = useState('Choose a year to view standings.')

  // for pulling in standings data
  const [standings, setStandings] = useState([])
  const [selectedStandings, setSelectedStandings] = useState(null)

  // set up useEffect to support async operations
  // useEffect takes in two arguments: (1) an anonymous function, followed by (2) a dependency array
  // whatever happens inside of this function will happen right when the component loads

  // we can put an async function inside of useEffect
  const getData = async (year) => {
    // make axios call
    const response = await axios.get(
      // `${BASE_URL}/${selected}/driverStandings.json`
      `${BASE_URL}/${year}/driverStandings.json`
    )
    // create setStandings to store standings in state
    setStandings(
      response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    )
  }
  // call getData function (we want our function to fire as soon as the component loads)

  return (
    <div className="App">
      <br />
      <br />

      <h1>Formula 1 standings through the years.</h1>
      <div className="dropdown-menu">
        {/* bring in drop down menu component */}
        <Dropdown
          getData={getData}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      <div className="container">
        {/* bring in our StandingList component */}
        {/* pass our state as a prop */}
        {/* standings, the property key (will be constructed in our props object when we pass it to the other component) = standings, the piece of state (what we want the value of that key to be)*/}
        <StandingList standings={standings} />
      </div>
      <br />
    </div>
  )
}

export default App
