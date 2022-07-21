import logo from './logo.svg'
import './App.css'
// import hooks useState and useState from react
import { useState, useEffect } from 'react'
// import axios to fetch api
import axios from 'axios'
// import global variables
import { BASE_URL } from './globals'

function App() {
  const [standings, setStandings] = useState([])
  const [selectedStandings, setSelectedStandings] = useState(null)

  // set up useEffect to support async operations
  // useEffect takes in two arguments: (1) an anonymous function, followed by (2) a dependency array
  // whatever happens inside of this function will happen right when the component loads
  useEffect(() => {
    // we can put an async function inside of useEffect
    const getData = async () => {
      // make axios call
      const response = await axios.get(`${BASE_URL}/2022/driverStandings.json`)
      // create setStandings to store standings in state
      setStandings(
        response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
      )

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
