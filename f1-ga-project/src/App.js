import logo from './logo.svg'
import './App.css'
// import hooks useState and useState from react
import { useState, useEffect } from 'react'
// import axios to fetch api
import axios from 'axios'
// import global variables
import { BASE_URL } from './globals'

// set up useEffect to support async operations

function App() {
  // useEffect takes in two arguments: (1) an anonymous function, followed by (2) a dependency array
  // whatever happens inside of this function will happen right when the component loads
  useEffect(() => {
    // we can put an async function inside of useEffect
    const getData = async () => {
      // make axios call
      // const response = await axios.get(
      //   `${BASE_URL}?method=independentExpend&apikey=${process.env.REACT_APP_API_KEY}`
      // )
      const response = await axios.get(
        // `${BASE_URL}/2022.json?callback=myParser`
        `http://ergast.com/api/f1/2008/driverStandings.json?callback=myParser`
      )
      console.log(response.data)
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
