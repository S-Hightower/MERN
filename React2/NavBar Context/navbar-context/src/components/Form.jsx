import React, { useContext, useState } from "react";

import NavBarContext from '../contexts/NavBarContext';

const Form = (props) => {
    const { name, setName } = useContext(NavBarContext);

    return (
        <form>
            <input type="text" placeholder="Enter Name Here" value={name} onChange={e => setName(e.target.value)}/>
        </form>
    );
};

export default Form;