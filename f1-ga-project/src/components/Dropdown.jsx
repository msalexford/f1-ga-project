// import useState
import { useState } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// create a dropdown menu for user to select year

function Dropdown ({selected,setSelected }) {
    const [isActive, setIsActive] = useState(false)
    const options = [
        '2022','2021','2020','2019','2018','2017','2016','2015','2014','2013','2012'
        // {year:'2022', id:'id2022'},
        // {year:'2021', id:'id2021'},
        // {year:'2020', id:'id2020'},
        // {year:'2019', id:'id2019'},
        // {year:'2018', id:'id2018'},
        // {year:'2017', id:'id2017'},
        // {year:'2016', id:'id2016'},
        // {year:'2015', id:'id2015'},
        // {year:'2014', id:'id2014'},
        // {year:'2013', id:'id2013'},
        // {year:'2012', id:'id2012'}
    ]

    return (
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
    )
}

export default Dropdown