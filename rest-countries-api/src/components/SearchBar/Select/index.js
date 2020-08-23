import React, { useState } from 'react';
import './index.scss';

function Select({ filter }) {
    const [controlList, setcontrolList] = useState(false);
    const [option, setOption] = useState('');
    
    function handleClick(){
        controlList ? setcontrolList(false) : setcontrolList(true);
    }

    function handleOption(event){
        const selectedOption = event.target.id;
        console.log(event.target);
        // setOption(event.target.getAttribute('id'));
        filter(option);
    }

    return (
        <div className="select-by-region">
            <ul onClick={handleClick} id="filter-by-region">
                <li role="heading">
                    <span>
                        Filter By Region
                    </span>
                    <ion-icon name="chevron-down-outline"></ion-icon>
                </li>
                    <ul className={controlList ? "list-items" : "list-none"}>
                        <li id="Africa" onClick={handleOption}>Africa</li>
                        <li id="America" onClick={handleOption}>America</li>
                        <li id="Asia" onClick={handleOption}>Asia</li>
                        <li id="Europe" onClick={handleOption}>Europe</li>
                        <li id="Oceania" onClick={handleOption}>Oceania</li>
                    </ul>
                
            </ul>
        </div>
    )
}

export default Select;