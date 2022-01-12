import React, { useState } from "react";
import styles from './BoxGenerator.module.css';

const BoxGenerator = (props) => {
    const[colorChoice, setColorChoice]= useState("");
    const[boxes, setBoxes]= useState([]);
    
    const BuildBox = (e) => {
        e.preventDefault();
        setBoxes([...boxes, colorChoice]);
        setColorChoice("");
        e.target.reset();
    };
    
    return(
        <>
            <form onSubmit={BuildBox}>
                <div>
                    <label>Color: </label>
                    <input type="text" onChange={e => setColorChoice(e.target.value)} value={colorChoice} />
                    <input type="submit" value="Add" />
                </div>
            </form>
            <br></br>
            <div className={styles.boxes}>
                {boxes.map((box, index) => {
                    return (<div key={index} style={{backgroundColor: box, height: '150px', width: '150px'}}></div>
                    )
                })
            }
            </div>
        </>
    );
};

export default BoxGenerator;