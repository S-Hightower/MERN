import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import axios from 'axios';

const Species = (props) => {
    const [species, setSpecies] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/species/${id}`)
        .then(response => {
            setSpecies(response.data);
        })
        .catch(error => {
            setSpecies({error: "These are not the droids you are looking for..."})
        });
    }, [id]);

    return (
        species.error ?
        <h1>{species.error}</h1> :
        <div>
            <h1>Species: {species.name}</h1>
            <h5>Classification: {species.classification}</h5>
            <h5>Average Lifespan: {species.average_lifespan}</h5>
            <h5>Language: {species.language}</h5>
            <h5>Homeworld: {species.homeworld}</h5>
        </div>
    );
};

export default Species;