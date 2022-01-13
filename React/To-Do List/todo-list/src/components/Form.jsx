import React, { useState } from "react";
import styles from './Forms.module.css';

const Form = (props) => {
    const[tasks, setTasks] = useState([]);
    const[newTasks, setNewTasks] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
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
        <form onSubmit={AddTask}>
            <div>
                <input type="text" placeholder="Add Text Here" onChange={e => setTasks(e.target.value)} value={tasks}/>
            </div>
            <div>
                <button>Add Task</button>
            </div>
        </form>
            {/* <div>
                <h3>Task List:</h3>
            </div>
            <div className={styles.list}>
                {tasks.map((task, index) => {
                    return (<div key={index}>{task}</div>
                    )
                })
                }
            </div> */}
        </div>
    )
};

export default Form;