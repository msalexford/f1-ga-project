// Import style sheet.
import './styles.css'
// Import hooks from React.
import { useState, useRef, useEffect } from 'react'
// Import StandingList component that we created.
import StandingList from './components/StandingList'
// Import Dropdown component that we created.
import Dropdown from './components/Dropdown'
// Import axios to fetch the Ergast API to populate the app.
import axios from 'axios'
// Import global axios variables.
import { BASE_URL } from './globals'

function App() {
  // For dropdown menu:
  const [selected, setSelected] = useState('Choose a year to view standings.')

  // For pulling in standings data:
  const [standings, setStandings] = useState([])
  const [selectedStandings, setSelectedStandings] = useState(null)

  // Set up useEffect to support async operations.
  // useEffect takes in two arguments: (1) an anonymous function, followed by (2) a dependency array.
  // Whatever happens inside of this function will happen right when the component loads.
  // We can put an async function inside of useEffect.

  // Get data from the API and store in a variable.
  const getData = async (year) => {
    // Make axios call to API. Pass year, which the user will select from the dropdown menu. Data will be stored in response.
    const response = await axios.get(
      // `${BASE_URL}/${selected}/driverStandings.json`
      `${BASE_URL}/${year}/driverStandings.json`
    )
    // Create setStandings to store the results of our axios request in state.
    setStandings(
      response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
    )
  }

  // Call getData function (we want our function to fire as soon as the component loads).

  return (
    // Return the app...
    <div className="App">
      <br />
      <br />

      {/* With this header... */}
      <h1>Formula 1 standings through the years.</h1>
      {/* The dropdown menu... */}
      <div className="dropdown-menu">
        {/* Bring in the dropdown menu component that we created. */}
        <Dropdown
          getData={getData}
          selected={selected}
          setSelected={setSelected}
        />
      </div>

      {/* ...and the driver cards that will populate the page on user selection from the dropdown menu. */}
      <div className="container">
        {/* Bring in StandingList component that we created. */}
        {/* Pass our state as a prop. */}
        {/* Standings, the property key (will be constructed in our props object when we pass it to the other component) = standings, the piece of state (what we want the value of that key to be). */}
        <StandingList standings={standings} />
      </div>
      <br />
    </div>
  )
}

// Export the app.
export default App
