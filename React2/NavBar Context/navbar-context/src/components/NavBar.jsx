import React, { useContext } from "react";

import NavBarContext from "../contexts/NavBarContext";

import styles from "../components/NavBarContext.module.css";

const NavBar = () => {
    const { name } = useContext(NavBarContext);

    return (
        <nav className={styles.nav}>Sup { name }😎</nav>
    );  
};

export default NavBar;