import toggleContext from "./toggleContext";
import React, { useState } from "react";

const ToggleContextProvider=({children})=>{
    const [toggle,setToggle]=useState(false);
    return (
        <toggleContext.Provider value={{toggle,setToggle}}>
            {children}
        </toggleContext.Provider>
    )
}

export default ToggleContextProvider