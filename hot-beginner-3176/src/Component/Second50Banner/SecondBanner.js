import React from 'react'
import styles from '../FiftyPerBanner/FiftyPerBanner.module.css';

const SecondBanner = () => {
  return (
    <>

            <div className={styles.MainBox50BannerBox}>
                <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/25539_BB_D_Puzzle_Month_01-01.jpg" />
            </div>

            <div className={styles.NowInPaperback}>
                <h2>Now In Paperback</h2>
            </div>
        </>
  )
}

export default SecondBanner