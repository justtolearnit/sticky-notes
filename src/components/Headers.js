import React from "react";


const Headers = ({ handleToggleDarkMode }) => {



    const toggleClicked = () => {
        handleToggleDarkMode((previousMode) => !previousMode)
    }

    return (
            <div className="headers-container">
                <h1>Notes</h1>
                <button
                    onClick={toggleClicked}
                    className="save"
                >Toggle</button>
            </div>
    );
}
export default Headers;