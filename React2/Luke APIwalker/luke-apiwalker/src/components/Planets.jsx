import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import axios from 'axios';

const Planets = (props) => {
    const [planet, setPlanet] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/${id}/')
        .then(response => {
            setPlanet(response.data);
        })
        .catch(error => {
            setPlanet({error: "These are not the droids you are looking for..."})
        });
    }, [id]);

    return (
        planet.error ?
        <h1>{planet.error}</h1> :
        <div>
            <h1>Planet: {planet.name}</h1>
            <h5>Climate: {planet.climate}</h5>
            <h5>Terrain: {planet.terrain}</h5>
            <h5>Rotation Period: {planet.rotation_period}</h5>
            <h5>Population: {planet.population}</h5>
        </div>
    );
};

export default Planets;