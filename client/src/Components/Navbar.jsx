import { Box,Flex,Text,Button,Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import './index.css'
import {TbJewishStarFilled} from 'react-icons/tb'

const Navbar = () => {
  const [count,setCount]=useState(0)

return (
  <>
    <Box className='navbar'>
      <Flex justifyContent='space-around' pt={8}>
        <Box w='20%'>
          <Text fontFamily='cursive' mt={-5} fontSize='40px'>Rohit</Text>
        </Box>
        <Flex fontSize='20px' fontWeight='bold' w='40%' justifyContent='space-around'>
          <Text className='Link_btns-dark'>Home</Text>
          <Text className='Link_btns-dark'>About</Text>
          <Text className='Link_btns-dark'>Team</Text>
          <Text className='Link_btns-dark'>Collection</Text>
        </Flex>
        <Box w='20%'>
        <Flex w='60%' justifyContent='space-around'>
          <Text fontSize='30px' mt='-9px' color='yellow'>
          <TbJewishStarFilled color='yellow'/>
          </Text>
          <Text fontSize='20px' mt={-2}>{count}</Text>
          <Button _hover={{background:'#4e76ff'}} mt={-3} background='#4e76ff' onClick={()=>setCount(count+1)}>Say GM</Button>
        </Flex>
        </Box>
      </Flex>
    </Box>
   
    </>
  )
}

export default Navbar
