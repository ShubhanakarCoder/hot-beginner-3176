import React from 'react'
import styles from './Online.module.css';
const OnlineStore = () => {
    return (
        <div className={styles.OnlineStore}>
            <h1 className={styles.OnlineStoreFirst}>LIMITED TIME OFFER</h1>
            
            <div>
                <h2 className={styles.OnlineStoreSecond}>
                    ONLINE & IN STORES
                </h2>
            </div>

            <div className={styles.Whiteline}>
                {/* <h6>white space</h6> */}
            </div>

        </div>
    )
}

export default OnlineStore