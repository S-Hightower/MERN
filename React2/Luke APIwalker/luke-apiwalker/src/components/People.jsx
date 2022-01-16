import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        <table>
            <thead>
                <tr>
                    <h1>Person: {selection.name}</h1>
                </tr>
            </thead>
            <tbody>
                <tr>
                    Height: {selection.height}
                </tr>
                <tr>
                    Eye Color: {selection.eye_color}
                </tr>
                <tr>
                    Birth Year: {selection.birth_year}
                </tr>
                <tr>
                    Homeworld: {selection.homeworld}
                </tr>
            </tbody>
        </table>
    );
};

export default People;