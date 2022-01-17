import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import axios from 'axios';

const People = (props) => {
    const [person, setPerson] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {setPerson(response.data);})
        .catch(error => {
            setPerson({error: "These are not the droids you are looking for..."})
        });
    }, [id]);

    return (
        person.error ?
        <h1>{person.error}</h1> :
        <div>
            <h1>Person:  {person.name}</h1>
            <h5>Height:  {person.height}</h5>
            <h5>Eye Color:  {person.eye_color}</h5>
            <h5>Birth Year:  {person.birth_year}</h5>
            <h5>Homeworld:  {person.homeworld}</h5>
        </div>
    );
};

export default People;