import React from 'react'
import styles from './FiftyPerBanner.module.css';
import { Grid, GridItem } from '@chakra-ui/react'
export const FiftyPerBanner = () => {
    return (
        <>

            <div className={styles.MainBox50BannerBox}>
                <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/09/25653_BB-B_50_Off_Sale_12-28b.jpg" />
            </div>

            <div className={styles.NowInPaperback}>
                <h2>Now In Paperback</h2>
            </div>

            {/* NowInPaperback books box Two Boxes */}

            <div className={styles.Booksboxes}>
                <Grid
                    h='200px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem rowSpan={2} colSpan={1} bg='tomato' />
                    <GridItem colSpan={1} bg='black' />
                    <GridItem colSpan={1} bg='black' />
                    <GridItem colSpan={1} bg='black' />
                    <GridItem colSpan={1} bg='black' />
                    <GridItem colSpan={1} bg='black' />
                    <GridItem colSpan={1} bg='black' />
                    <GridItem colSpan={1} bg='black' />
                    <GridItem colSpan={1} bg='black' />
                    
        
                    {/* <GridItem colSpan={4} bg='tomato' /> */}
                </Grid>
            </div>
        </>
    )
}
