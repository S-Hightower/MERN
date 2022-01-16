import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import axios from 'axios';

const People = (props) => {
    const [selection, setSelection] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/${id}')
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
            <h1>Person: {selection.name}</h1>
            <h5>Height: {selection.height}</h5>
            <h5>Eye Color: {selection.eye_color}</h5>
            <h5>Birth Year: {selection.birth_year}</h5>
            <h5>Homeworld: {selection.homeworld}</h5>
        </div>
    );
};

export default People;