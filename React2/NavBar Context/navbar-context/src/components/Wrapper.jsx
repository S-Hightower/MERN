import React, { useState } from "react";

import NavBarContext from "../contexts/NavBarContext";

const Wrapper = ({ children }) => {
    const [name, setName] = useState("");

    return (
        <NavBarContext.Provider value={{ name, setName}}>
            { children }
        </NavBarContext.Provider>
    );
};

export default Wrapper;