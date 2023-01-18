// Import the Constructor component that we created.
import Constructor from './Constructor'
// Import the Points component that we created.
import Points from './Points'

// Create a functional component to display our standings.
// Send standings data to this component by passing props.
const StandingList = (props) => {

    // console.log(props)

    // Every React functional component has a return statement.
    return (
        // Every return statement contains some sort of parent element.
        <div>
            {/* The array method .map() will allow us to display the F1 data that we got from the API. It will take an array, and produce a new array with new values.*/}
            {/* Use curly brackets to switch to Javascript within a JSX file. */}
            {/* Map takes an anonymous function. */}
            {/* Use parentheses because there is an implicit return. */}
            {props.standings.map((standing) => (
                // A function will generally take in the singular of the plural prop (here, 'standing' vs. 'standings'.)
                // Here we will put all the JSX for each standing we want to display on the screen:
                
                // Anytime you use .map(), you must give outermost element (here, a div) a key.
                <div key={standing.position}>
                    {/* On click of the card, open a new tab with the Wikipedia page of the driver. */}
                    <a href = {standing.Driver.url} target="_blank" rel="noreferrer">
                        <div className="card">
                            {/* The title of the card is the driver's last name. */}
                            <div className="card_title">
                                <h3>{standing.Driver.familyName}</h3>
                            </div>
                            {/* Under the driver's last name will be their nationality. */}
                            <div className='nationality'>
                                <p>{standing.Driver.nationality}</p>
                            </div>
                            {/* Under the driver's name and nationality, bring in the components we created to display the constructor the driver is driving for, and the amount of points the driver won in the season. */}
                            <div className="card_body">
                                <Constructor constructor={standing.Constructors[0]}/>
                                <Points points={standing.points} />
                            </div>
                            {/* On the right side of the card, populate an image of the driver by pulling it from our images folder. */}
                            <div className='card_img'>
                                <img class = 'profilePic' alt = 'Driver Image' src = {require(`/public/images/${standing.Driver.familyName}.png`)} />
                            </div>
                        </div>
                    </a>
                </div>
            ))
            }
        </div>
    )
}

// Every functional component has an export.
export default StandingList