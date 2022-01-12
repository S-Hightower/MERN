import React, { useState } from "react";

import styles from './Tabs.module.css';

const Tabs = (props) => {
    const[tabs,setTabs]= useState([]);

    const onClickHandler = (e, index) => {
        e.preventDefault();
        setTabs(index);
    };

    return (
        <div className={styles.container}>
        <div className={styles.clickers}>
            <div className={styles.tab} onClick={e => onClickHandler(e, 1)} value={tabs}>Tab 1</div>
            <div className={styles.tab} onClick={e => onClickHandler(e, 2)} value={tabs}>Tab 2</div>
            <div className={styles.tab} onClick={e => onClickHandler(e, 3)} value={tabs}>Tab 3</div>
        </div>
        <div className={styles.content}>
            {tabs === 1 && <p>Tab 1: 🦄🦄🦄</p>}
            {tabs === 2 && <p>Tab 2: 🐧🐧🐧</p>}
            {tabs === 3 && <p>Tab 3: 🐼🐼🐼</p>}
        </div>
        </div>
    )
};

export default Tabs;