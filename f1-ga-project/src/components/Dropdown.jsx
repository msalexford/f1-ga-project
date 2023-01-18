// Import useState hook from React.
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Create a functional component for user to select year. A functional component is a JS function that accepts an input of properties, and returns HTML that describes the UI.
// You can only use hooks inside of function components (not class components - classes have their own way to do the same thing that hooks do).

function Dropdown ({selected,setSelected, getData }) {
    // Destructure inline, because useState always returns an array with two values.
    // First value is the current state (isActive). Second value is a function that will allow us to update our state (setIsActive).
    // We can also set a default value. Here, that is useState(false) because at start, the dropdown is closed.
    const [isActive, setIsActive] = useState(false)

    // Create a variable for options to be included in the dropdown.
    const options = [
        '2022','2021','2020','2019','2018','2017','2016','2015'
    ]
    // Return a dropdown menu.
    return (
        <div>
        <div className="dropdown">
            {/* On click of the dropdown button, set our dropdown's state to open. */}
            {/* Clicking on the button will toggle its value open and closed. */}
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
            {selected}
            {/* Down caret on dropdown button. */}
            <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                // Pass props into dropdown elements.
                <div className="dropdown-content">
                    {/* Testing code notes: */}
                    {/* error here, need a unique key when using .map */}
                    {/* Set states for style change on hover. */}
                    {/* Map options as dropdown items. */}
                    {options.map((option) => (
                        <div
                            key={option.position}
                            onClick={(e) => {
                                setSelected(option)
                                setIsActive(false)
                            }}
                            className="dropdown-item"
                        >
                        {option}
                        {/* Testing code notes: */}
                        {/* selected = user year choice? */}
                        {/* {console.log(selected)} */}
                </div>
            ))}
        </div>
    )}
</div>

<button onClick={() => getData(selected)} className='center'>
    Click for results
</button>

</div>
    )
}

// Export Dropdown component.
export default Dropdown