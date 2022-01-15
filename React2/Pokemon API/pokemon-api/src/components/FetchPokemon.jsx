import React, { useEffect, useState } from "react";

import styles from './FetchPokemon.module.css';

const FetchPokemon = (props) => {
    const [pokemon, setPokemon] = useState("");
    const [state, setState] = useState("");

    const PullPokemon = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=105')
            .then(response => {
                return response.json()
            })
            .then(response => {
                setState({pokemon: response.results})
            })
    };



    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1>Pokemon API</h1>
            </div>
            <div>
                <button onClick={PullPokemon}>Fetch the Pokemon!</button>
            </div>
            <div className={styles.list}>
                {state.pokemon ? state.pokemon.map((pokemon, index) =>{
                    return (<div key={index}>{pokemon.name}</div>)
                }):null}
            </div>
        </div>
    );
};

export default FetchPokemon;