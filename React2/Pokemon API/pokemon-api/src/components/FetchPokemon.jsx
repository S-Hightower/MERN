//edited for axios switch

import React, { useEffect, useState } from "react";
import axios from 'axios';

import styles from './FetchPokemon.module.css';

const FetchPokemon = (props) => {
    const [pokemon, setPokemon] = useState("");
    // const [state, setState] = useState("");

    const PullPokemon = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=105')
            // .then(response => {
            //     return response.json()
            // })
            .then(response => {
                setPokemon(response.data.results)
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
                {pokemon ? pokemon.map((pokemon, index) =>{
                    return (<div key={index}>{pokemon.name}</div>)
                }):null}
            </div>
        </div>
    );
};

export default FetchPokemon;