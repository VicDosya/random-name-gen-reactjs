import React from 'react'
import styles from './Badges.module.css'

function Badges({values}) {
    return (
            <div className={styles.container}>{values.map((value, index) =>
                <div className={styles.badge} key={index}>{value}</div>
            )}</div>
        
    )
}

export default Badges