import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from 'axios';

const Species = (props) => {
    const [selection, setSelection] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://swapi.dev/api/species/${id}')
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
                    <h1>Species: {selection.name}</h1>
                </tr>
            </thead>
            <tbody>
                <tr>
                    Classification: {selection.classification}
                </tr>
                <tr>
                    Average Lifespan: {selection.average_lifespan}
                </tr>
                <tr>
                    Language: {selection.language}
                </tr>
                <tr>
                    Homeworld: {selection.homeworld}
                </tr>
            </tbody>
        </table>
    );
};

export default Species;