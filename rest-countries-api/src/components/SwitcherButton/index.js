import React from 'react';

/**
 * Van Ribeiro, please, read this tutorial: 
 * https://medium.com/@jasonlmcaffee/theming-with-react-and-sass-c7a6882fd26b
 */

function SwitcherButton(){

    return (
        <div className="switcher-button">
            <input 
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