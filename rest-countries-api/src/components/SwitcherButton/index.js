import React, { useState } from 'react';

function SwitcherButton(){
    const [switcher, setSwitcher] = useState(false);
    let switcherClass = "switcher-btn";
    function handleSwitcherButton() {
        setSwitcher(switcher + true)
    }
    return (
        <div className="switcher-button">
            <input className={switcherClass} 
            onChange={handleSwitcherButton} 
            defaultChecked
            type="checkbox" name="switcher" id="switcher-btn"/>

            <label  htmlFor="switcher-btn">
                <ion-icon name="moon-outline"></ion-icon>
                Dark Mode
            </label>
        </div>
    )
}



export default SwitcherButton;