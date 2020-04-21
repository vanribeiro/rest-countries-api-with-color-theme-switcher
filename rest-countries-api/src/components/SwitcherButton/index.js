import React from 'react';
import './themes/dark.scss';


function SwitcherButton(){
    let switcherClass = "switcher-btn";

    function handleSwitcherButton(event) {
        const value = event.target;
        if(value.checked === true){
            document.body.style.backgroundColor = "#000000";
            console.log('claro');
        } else{
            document.body.style.backgroundColor = "#efefef";
            console.log('escuro');
        }
    }
    return (
        <div className="switcher-button">
            <input className={switcherClass} 
            onChange={handleSwitcherButton}
            type="checkbox" 
            name="switcher" 
            id="switcher-btn"
                hidden
            />

            <label  htmlFor="switcher-btn">
                <ion-icon name="moon-outline"></ion-icon>
                Dark Mode
            </label>
        </div>
    )
}



export default SwitcherButton;