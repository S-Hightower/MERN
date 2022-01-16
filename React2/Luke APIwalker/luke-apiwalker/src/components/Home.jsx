import React, { useState } from "react";

import { useHistory } from "react-router-dom";


const Home = (props) => {
    const [selection, setSelection] = useState("planets");
    const [id, setId] = useState(7);
    const history = useHistory();

    const StarWarsPull = e => {
        e.preventDefault();
        history.push(`/${selection}/${id}`);
    };

    return(
        <form onSubmit={StarWarsPull}>
            <label>Search for:</label>
            <select onChange={e=> setSelection(e.target.value)} value={selection}>
                <option>Planets</option>
                <option>People</option>
                <option>Species</option>
            </select>
            <label>ID:</label>
            <input type="number" onChange={e=> setId(e.target.value)} value={id} min={1}/>
            <button>Commence Search!</button>
        </form>
    );
};

export default Home;