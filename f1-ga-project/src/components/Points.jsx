// Import the Points style sheet.
import './points.css'

// Create a Points component that will be a string containing the total points each driver won in a given season.
const Points = ({ points }) => {
    return (
        <div className="points">
            <p>Finished with {points} points.</p>
        </div>
    )
}

// Export Points component.
export default Points