import React, { useState } from "react";

import styles from './Tabs.module.css';

const Tabs = (props) => {
    const[tabs,setTabs]= useState([]);
    const[wasClicked, setWasClicked] = useState(false);

    const onClickHandler = (e, index) => {
        e.preventDefault();
        setTabs(index);
        setWasClicked(true);
    };

    return (
        <div className={styles.container}>
        <div className={styles.clickers}>
            <div className={styles.tab} onClick={e => onClickHandler(e, 1)} value={tabs}>Tab 1</div>
            <div className={styles.tab} onClick={e => onClickHandler(e, 2)} value={tabs}>Tab 2</div>
            <div className={styles.tab} onClick={e => onClickHandler(e, 3)} value={tabs}>Tab 3</div>
        </div>
        <hr/>
        <div className={styles.content}>
            { !wasClicked && <p>Click on a tab!</p>}
            {tabs === 1 && <h2>Tab 1: 🦄🦄🦄</h2>}
            {tabs === 2 && <h2>Tab 2: 🐧🐧🐧</h2>}
            {tabs === 3 && <h2>Tab 3: 🐼🐼🐼</h2>}
        </div>
        </div>
    )
};

export default Tabs;