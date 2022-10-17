import React from 'react'
import styles from './Badges.module.css'

const Badges = ({ values, badgeOnClick, title, badgeColor }) => {

    return (
        <div>
            <h1 className={styles.titleHeader}>{title}</h1>
            <div className={styles.container}>{values.map((value, index) =>
                <div
                    onClick={() => badgeOnClick(value)}
                    style={{ backgroundColor: badgeColor }}
                    className={styles.badge}
                    key={index}>{value}</div>
            )}</div>
        </div>
    )
}

export default Badges