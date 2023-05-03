import { Box,Flex,Text,Button,Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import '../Pages/Home/index.css'
import {TbJewishStarFilled} from 'react-icons/tb'

const Navbar = () => {
  const [count,setCount]=useState(0)

return (
  <>
    <Box className='navbar'>
      <Flex pt={8} pl={10}>
        <Box w='18%'>
          <Text mt={0} fontSize='20px'>www.cryptorohittt.com</Text>
        </Box>
        <Box w='20%' pl={10}>
        <Flex w='80%' justifyContent='space-around'>
          <Text fontSize='30px' mt='-9px' color='yellow'>
          <TbJewishStarFilled color='yellow'/>
          </Text>
          <Text fontSize='20px' mt={-2}>{count}</Text>
          <Button _hover={{background:'#4e76ff'}} mt={-3} background='#4e76ff' onClick={()=>setCount(count+1)}>Say GM</Button>
        </Flex>
        </Box>
        <Flex fontSize='20px' fontWeight='bold' w='40%' justifyContent='space-around'>
          <Text className='Link_btns-dark'>Home</Text>
          <Text className='Link_btns-dark'>About</Text>
          <Text className='Link_btns-dark'>Team</Text>
          <Text className='Link_btns-dark'>Collection</Text>
        </Flex>
        
      </Flex>
    </Box>
   
    </>
  )
}

export default Navbar
