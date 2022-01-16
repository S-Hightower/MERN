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

};

export default Planets;