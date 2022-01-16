import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import axios from 'axios';

const Species = (props) => {
    const [input, setInput] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://swapi.dev/api/species/${id}')
        .then(response => {
            setInput(response.input);
        })
        .catch(error => {
            setInput({error: "These are not the droids you are looking for..."})
        });
    }, [id]);

    return (
        input.error ?
        <h1>{input.error}</h1> :
        <div>
            <h1>Species: {input.name}</h1>
            <h5>Classification: {input.classification}</h5>
            <h5>Average Lifespan: {input.average_lifespan}</h5>
            <h5>Language: {input.language}</h5>
            <h5>Homeworld: {input.homeworld}</h5>
        </div>
    );
};

export default Species;