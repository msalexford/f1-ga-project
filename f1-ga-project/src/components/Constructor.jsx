// Create the Constructor component, which will display details about the contructor.
const Constructor = ({ constructor }) => {
    return (
        // Div class name will be 'constructor'.
        <div className="constructor">
            {/* Will contain a string with constructor name and nationality. */}
            <p>{constructor.name}, {constructor.nationality} constructor</p>
        </div>
    )
}

// Export Constructor component.
export default Constructor