import React from "react";

import { useParams } from "react-router";

const Parameters = (props) => {
    const {input} = useParams();
    const {color1} = useParams();
    const {color2} = useParams();

    return (
        <h1 style={{color: color1, backgroundColor: color2, height: 200}}>The {isNaN(parseInt(input)) ? 'word' : 'number'} is {input}.</h1>
    )
};

export default Parameters;