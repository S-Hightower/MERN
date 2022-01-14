import React, { useEffect, useState } from "react";

import styles from './FetchPokemon.module.css';

const FetchPokemon = (props) => {
    const [pokemon, setPokemon] = useState("");
    const [state, setState] = useState("");

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(response => response.json())
            .then(response => setPokemon(response.results))
    });

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Pokemon API</h1>
            </div>
            <div>
                <button onClick={FetchPokemon}>Fetch the Pokemon!</button>
            </div>
            <div>
                {pokemon.length > 0 && pokemon.map((pokemon, index) =>{
                    return (<div key={index}>{pokemon.name}</div>)
                })}
            </div>
        </div>
    );
};

export default FetchPokemon;