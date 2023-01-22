import React from 'react'
import styles from './Online.module.css';
const OnlineStore = () => {
    return (
        <>
            <div className='whiteline'>

            </div>

            <div className={styles.OnlineStore}>
                <h1 className={styles.OnlineStoreFirst}>LIMITED TIME OFFER</h1>

                <div>
                    <h2 className={styles.OnlineStoreSecond}>
                        <span className={styles.OnlineStoreSecondspan}> ONLINE & IN STORES</span>
                        <span className={styles.OnlineStoreSecond50per}> 50% OFF THOUSNAD OF HARDCOVER BOOKS</span>
                        <span className={styles.OnlineStoreSecondspan}> AND MORE DEALS</span>
                    </h2>
                </div>


                <div className={styles.whitegapbetween}>
                    <p className={styles.whitegapbetweenText}>Free Shipping on Orders of $40 or More</p>
                </div>

            </div>
        </>
    )
}

export default OnlineStore