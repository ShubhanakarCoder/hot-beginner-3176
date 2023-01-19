import React from 'react'
import { Flex, Spacer, Box, Heading, Button, ButtonGroup } from '@chakra-ui/react';
import styles from './Navbar.module.css';
import NavbarwithInput from './NavbarwithInput';
import NavbarList from './NavbarList';
const Navbar = () => {
  return (
    <>
    
    <Flex minWidth='max-content' alignItems='center' gap='2' >
      <ButtonGroup gap='9'>
        <Heading className={styles.secondStoreEevent} size='sm'>Chakra App |</Heading>
        <Heading className={styles.secondStoreEevent} size='md'>Chakra App |</Heading>
        <Heading className={styles.secondStoreEevent} size='md'>Chakra App |</Heading>
        <Heading className={styles.secondStoreEevent} size='md'>Chakra App</Heading>
      </ButtonGroup>
      
      <Spacer />
      <ButtonGroup className={styles.secondAccountParrentEevent} gap='2'>
        <Button className={styles.secondAccountEevent}>MY ACCOUNT</Button>
        <Button className={styles.secondAccountEevent}>WISHLIST </Button>
      </ButtonGroup>
    </Flex>
    <NavbarwithInput/>
    <NavbarList/>
    </>
  )
}

export default Navbar



