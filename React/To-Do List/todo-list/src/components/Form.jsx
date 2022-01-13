import React, { useState } from "react";
import styles from './Forms.module.css';

const Form = (props) => {
    const[tasks, setTasks] = useState([]);
    const[newTasks, setNewTasks] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(newTasks);
        // tasks.push(newTasks);
        // console.log(tasks);
        setTasks([...tasks, newTasks]);
        e.target.reset();
    };

    // const CheckTask = task => {
    //     const newTasks = [...tasks];
    //     setTasks(newTasks);
    // };

    // const DeleteTask = task => {
    // };

    return(
        <div className={styles.container}>
        <div className={styles.header}>
            <h1>To Do List:</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="Add Text Here" onChange={e => setNewTasks(e.target.value)}/>
            </div>
            <div>
                <button>Add Task</button>
            </div>
        </form>
        <div className={styles.listBox}>
        {tasks.map((task, index) => {
            return <div className={styles.list}>
                
            </div>
        })}
        </div>
        </div>//container
    )
};

export default Form;