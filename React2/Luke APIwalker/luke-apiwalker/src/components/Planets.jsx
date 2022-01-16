import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <table>
            <thead>
                <tr>
                    <h1>Planet: {selection.name}</h1>
                </tr>
            </thead>
            <tbody>
                <tr>
                    Climate: {selection.climate}
                </tr>
                <tr>
                    Terrain: {selection.terrain}
                </tr>
                <tr>
                    Rotation Period: {selection.rotation_period}
                </tr>
                <tr>
                    Population: {selection.population}
                </tr>
            </tbody>
        </table>
    );
};

export default Planets;