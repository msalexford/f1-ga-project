const Constructor = ({ constructor }) => {
    return (
        <div className="constructor">
            <p>{constructor.name}, {constructor.nationality} constructor</p>
        </div>
    )
}

export default Constructor