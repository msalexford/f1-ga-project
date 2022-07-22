import Constructor from './Constructor'
import Points from './Points'


// create a component to display our standings

// create a function
// we need to send standings data to this component by passing props
const StandingList = (props) => {

    console.log(props)

    // every React functional component has a return statement
    return (
        // every return statement contains some sort of parent element
        <div>
            {/* map through our array to display information */}
            {/* switch to curly brackets to switch to Javascript within a JSX file */}
            {/* map takes an anonymous function */}
            {/* parentheses because an implicit return */}
            {props.standings.map((standing) => (
                // .map() will take an array, and produce a new array with new values
                // function will take in generally the singular of the plural (here, 'standing')
                // here we will put all the JSX for each standing we want to display on the screen
                // give the div a key (anytime you use map, you must give outermost element a key)
                <div key={standing.position}>
                    <div className="card">
                    <div className="card_title">
                        <h3>{standing.Driver.familyName}</h3>
                    </div>
                    <div className="card_body">
                        <Constructor constructor={standing.Constructors[0]}/>
                        <Points points={standing.points} />
                    </div>
                    </div>
                </div>
            ))
            }
        </div>
    )
}

// every functional component has an export
export default StandingList