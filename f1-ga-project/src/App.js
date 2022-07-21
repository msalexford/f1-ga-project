// import styles
import './styles.css'
// import hooks useState and useState from react
import { useState, useEffect } from 'react'
// import StandingList component
import StandingList from './components/StandingList'
// import dropdown component
import Dropdown from './components/Dropdown'
// import axios to fetch api
import axios from 'axios'
// import global variables
import { BASE_URL } from './globals'

function App() {
  // for drop down menu
  const [selected, setSelected] = useState('Choose a year to view standings.')

  // for pulling in standings data
  const [standings, setStandings] = useState([])
  const [selectedStandings, setSelectedStandings] = useState(null)

  // set up useEffect to support async operations
  // useEffect takes in two arguments: (1) an anonymous function, followed by (2) a dependency array
  // whatever happens inside of this function will happen right when the component loads
  useEffect(() => {
    // we can put an async function inside of useEffect
    const getData = async () => {
      // make axios call
      const response = await axios.get(
        `${BASE_URL}/${selected}/driverStandings.json`
      )
      // create setStandings to store standings in state
      setStandings(
        response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      )
      // console.log(
      //   response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      // )

      // data we want is:
      // (1) driver first name --> [number] > Driver > givenName
      // (2) driver second name --> [number] > Driver > familyName
      // (2) constructor --> [number] > Constructors > 0 > name
      // (3) points
    }
    // call getData function (we want our function to fire as soon as the component loads)
    getData()
  }, [])

  return (
    <div className="App">
      <br />

      <h1>Formula 1 standings through the years.</h1>

      {/* bring in drop down menu component */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <br />
      <br />

      {/* bring in our StandingList component */}
      {/* pass our state as a prop */}
      {/* standings, the property key (will be constructed in our props object when we pass it to the other component) = standings, the piece of state (what we want the value of that key to be)*/}
      <StandingList standings={standings} />
    </div>
  )
}

export default App
