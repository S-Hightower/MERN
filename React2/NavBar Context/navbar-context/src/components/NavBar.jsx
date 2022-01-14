import React, { useContext } from "react";

import NavBarContext from "../contexts/NavBarContext";

const NavBar = (props) => {
    const { name } = useContext(NavBarContext);

    return (
        <nav>Sup { name }👀</nav>
    );  
};

export default NavBar;