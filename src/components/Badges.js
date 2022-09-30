import React from 'react'
import styles from './Badges.module.css'

const Badges = ({ values, setValues, title, badgeColor }) => {

    //Remove a badge
    const removeBadgeHandler = (value) => {
        const filteredValues = values.filter((val) => val !== value);
        setValues(filteredValues);
    };

    return (
        <div>
            <h1 className={styles.titleHeader}>{title}</h1>
            <div className={styles.container}>{values.map((value, index) =>
                <div
                    onClick={() => removeBadgeHandler(value)}
                    style={{ backgroundColor: badgeColor }}
                    className={styles.badge}
                    key={index}>{value}</div>
            )}</div>
        </div>
    )
}

export default Badges