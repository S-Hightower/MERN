import React, { useState } from "react";
import styles from './Forms.module.css';

const Form = (props) => {
    const[task, setTask] = useState("");

    const AddTask = (e) => {
        e.preventDefault();
        setTask("");
        e.target.reset();
    }

    return(
        <div className={styles.container}>
        <div className={styles.header}>
            <h1>To Do List:</h1>
        </div>
        <form onSubmit={AddTask}>
            <div className={styles.textbox}>
                <input type="text" placeholder="Add Text Here" onChange={e => setTask(e.target.value)} />
            </div>
            <div className={styles.btn}>
                <input type="submit" value="Add Task"/>
            </div>
        </form>
            <div className={styles.list}>
                <h3>Task List:</h3>
                <ul>
                <li>
                {task.map((index) => {
                    return (<div key={index}></div>
                        )
                    })
                }
                </li>
                </ul>
            </div>
        </div>
    )










};

export default Form;