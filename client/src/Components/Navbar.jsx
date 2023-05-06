import { Box,Flex,Text,Button,Image } from '@chakra-ui/react'
import React, { useState } from 'react'
import '../Pages/Home/index.css'
import {TbJewishStarFilled} from 'react-icons/tb'

const Navbar = () => {
  const [count,setCount]=useState(0)
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setCount(count+1)
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 600);
  };


return (
  <>
    <Box className='navbar'>
      <Flex pt={8} pl={10}>
        <Box w='18%'>
          <Text mt={0} fontSize='20px'>www.cryptorohittt.com</Text>
        </Box>
        <Box w='20%' pl={10}>
        <Flex w='80%' justifyContent='space-around' border='2px solid white' mt='-17px' p={3}>
          <Text className={clicked ? 'clicked' : 'nonClicked'} fontSize='30px' >
          <TbJewishStarFilled />
          </Text>
          <Text fontSize='20px'>{count}</Text>
          <Button _hover={{background:'#4e76ff'}} background='#4e76ff' className={clicked ? 'btnclicked' : 'btnnonClicked'}
          onClick={handleClick} >Say GM</Button>
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
