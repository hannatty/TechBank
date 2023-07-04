import React from "react";
import { Flex, Box, Button, Spacer, Image } from "@chakra-ui/react";
import logo from '../../Images/TechBank.png';

export const Header = () => {
  return (
    <Flex minWidth='max-content' backgroundColor='#000924' alignItems='center'>
      <Box p='2'>
        <Image
          boxSize='120px'
          objectFit='cover'
          src={logo}
          alt='logo'
          marginLeft='15px'
        />
      </Box>
      <Spacer />
      <Button 
        size='lg'
        backgroundColor='#FFF'
        marginRight='2em'
        > Login
      </Button>
    </Flex>
  )
}