import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import axios from 'axios';

const Planets = (props) => {
    const [selection, setSelection] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/${id}')
        .then(response => {
            setSelection(response.selection);
        })
        .catch(error => {
            setSelection({error: "These are not the droids you are looking for..."})
        });
    }, [id]);

    return (
        selection.error ?
        <h1>{selection.error}</h1> :
        <div>
            <h1>Planet: {selection.name}</h1>
            <h5>Climate: {selection.climate}</h5>
            <h5>Terrain: {selection.terrain}</h5>
            <h5>Rotation Period: {selection.rotation_period}</h5>
            <h5>Population: {selection.population}</h5>
        </div>
    );
};

export default Planets;