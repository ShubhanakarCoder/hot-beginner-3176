import React from 'react'
import styles from './FiftyPerBanner.module.css';
import { Grid, GridItem } from '@chakra-ui/react';
import { Card, CardHeader, StackDivider, Box, Image, ButtonGroup, Button, Divider, Text, Stack, Heading, Flex, Avatar, CardBody, SimpleGrid,CardFooter } from '@chakra-ui/react'
export const FiftyPerBanner = () => {
    return (

        <div className={styles.main}>
            {/* <div className={styles.MainBox50BannerBox}>
                <img src="https://dispatch.barnesandnoble.com/content/dam/ccr/homepage/daily/2023/01/09/25653_BB-B_50_Off_Sale_12-28b.jpg" />
            </div>

            <div className={styles.NowInPaperback}>
                <h2>Now In Paperback</h2>
            </div> */}


            <div className={styles.Booksboxes}>
                <Grid
                    h='200px'
                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(5, 1fr)'
                    gap={4}
                >
                    <GridItem className={styles.chLeftBox} rowSpan={2} colSpan={1} bg='tomato'>
                        <img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781952210587_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D" />

                        <div className={styles.leftText}>
                            <h4><b>Sweeter Than Chocolate</b></h4>
                            <p>Lizzie Shane</p>
                            <p>Do the "Cupid chocolates" from Lucy's shop really help people meet their One True Love? Dean, a TV reporter, has his doubts…
                                Together, they find that the truth can be complicated…especially when it comes to their own hearts.
                            </p>
                        </div>

                    </GridItem>
                    
                    <SimpleGrid columns={[2, null, 3]} spacing='40px'>
                        <Box bg='tomato' height='80px'><img src="https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&product=path%5B/pimages/9781952210587_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D" /></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                        <Box bg='tomato' height='80px'></Box>
                    </SimpleGrid>



                    {/* <GridItem colSpan={4} bg='tomato' /> */}
                </Grid>
            </div>
        </div>
    )
}
