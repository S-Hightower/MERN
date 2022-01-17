import React, { useState } from "react";

import { useHistory } from "react-router-dom";


const Home = (props) => {
    const [selection, setSelection] = useState("planets");
    const [id, setId] = useState(1);
    const history = useHistory();

    const StarWarsPull = e => {
        e.preventDefault();
        history.push(`/${selection}/${id}`);
    };

    return(
        <div className="container-sm mt-3 mb-5">
            <h1>Star Wars Search</h1>
            <h5>Look for: Planets/People/Species</h5>
            <form onSubmit = {StarWarsPull}>
                <div className="form-group mt-3">
                    <label>Search for:</label>
                    <select onChange={e=> setSelection(e.target.value)} value={selection} className="form-select">
                        <option>planets</option>
                        <option>people</option>
                        <option>species</option>
                    </select>
                    <label className="mt-3">ID:</label>
                    <input type="number" onChange={e=> setId(e.target.value)} value={id} min={1} className="form-control"/>
                    <div className="mt-3">
                        <button className="btn btn-lg btn btn-info">Commence Search!</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Home;