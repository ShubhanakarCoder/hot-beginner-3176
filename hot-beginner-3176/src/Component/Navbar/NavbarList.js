import React from 'react'
import styles from './Navbar.module.css';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react';
const NavbarList = () => {
  return (
    // <div className={styles.forthNavbarparentInputbox}>

    //   <Breadcrumb  separator='||'>

    //     <BreadcrumbItem className={styles.tenNavbar} >
    //       <BreadcrumbLink href='#'>Home</BreadcrumbLink>
    //     </BreadcrumbItem>

    //     <BreadcrumbItem className={styles.tenNavbar}>
    //       <BreadcrumbLink href='#'>About</BreadcrumbLink>
    //     </BreadcrumbItem>

    //     <BreadcrumbItem className={styles.tenNavbar}>
    //       <BreadcrumbLink href='#'>About</BreadcrumbLink>
    //     </BreadcrumbItem>

    //     <BreadcrumbItem className={styles.tenNavbar}>
    //       <BreadcrumbLink href='#'>About</BreadcrumbLink>
    //     </BreadcrumbItem>

    //     <BreadcrumbItem className={styles.tenNavbar}>
    //       <BreadcrumbLink href='#'>About</BreadcrumbLink>
    //     </BreadcrumbItem>

    //     <BreadcrumbItem className={styles.tenNavbar}>
    //       <BreadcrumbLink href='#'>About</BreadcrumbLink>
    //     </BreadcrumbItem>

    //     <BreadcrumbItem className={styles.tenNavbar}>
    //       <BreadcrumbLink href='#'>About</BreadcrumbLink>
    //     </BreadcrumbItem>

    //     <BreadcrumbItem className={styles.tenNavbar}>
    //       <BreadcrumbLink href='#'>About</BreadcrumbLink>
    //     </BreadcrumbItem>
    //     <BreadcrumbItem className={styles.tenNavbar}>
    //       <BreadcrumbLink href='#'>About</BreadcrumbLink>
    //     </BreadcrumbItem>

    //     <BreadcrumbItem className={styles.tenNavbar}>
    //       <BreadcrumbLink href='#'>About</BreadcrumbLink>
    //     </BreadcrumbItem>

    //     <BreadcrumbItem className={styles.tenNavbar}>
    //       <BreadcrumbLink href='#'>About</BreadcrumbLink>
    //     </BreadcrumbItem>

    //     <BreadcrumbItem className={styles.tenNavbar}>
    //       <BreadcrumbLink href='#'>About</BreadcrumbLink>
    //     </BreadcrumbItem>

    //     <BreadcrumbItem isCurrentPage>
    //       <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
    //     </BreadcrumbItem>
    //   </Breadcrumb>
    // </div>

    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
    </>
  )
}

export default NavbarList