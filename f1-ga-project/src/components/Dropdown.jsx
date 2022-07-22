// import useState
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// create a dropdown menu for user to select year

function Dropdown ({selected,setSelected, getData }) {
    const [isActive, setIsActive] = useState(false)
    const options = [
        '2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012'
    ]

    return (
        <div>
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
               {selected}
               <span className="fas fa-caret-down"></span>
            </div>
            {isActive && (
                <div className="dropdown-content"
                >
                    {/* error here, need a unique key when using .map */}
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
                        {/* selected = user year choice? */}
                        {/* {console.log(selected)} */}
                </div>
            ))}
        </div>
    )}
</div>

<button onClick={() => getData(selected)}>
    Show results
</button>

</div>
    )
}

export default Dropdown