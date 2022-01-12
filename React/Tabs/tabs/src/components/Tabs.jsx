import React, { useState } from "react";

const Tabs = (props) => {
    const[tabs,setTabs]= useState([]);
    const[wasClicked, setWasClicked] = useState(false);

    const onClickHandler = (e, value) => {
        e.preventDefault();
        setTabs(index);
        setWasClicked(true);
    };

    return (
        <>
        <div className={style.tab} onClick={e => onClickHandler(e, 1)} value={tabs}>Tab 1</div>
        <div className={style.tab} onClick={e => onClickHandler(e, 2)} value={tabs}>Tab 2</div>
        <div className={style.tab} onClick={e => onClickHandler(e, 3)} value={tabs}>Tab 3</div>
        </>
    )
};

export default Tabs;