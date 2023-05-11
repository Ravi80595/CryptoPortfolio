import { Box,Flex,Text,Button,Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
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
        <Box w='16%'>
          <Text mt={0} fontSize='17px' fontWeight='bold'>www.cryptorohittt.com</Text>
        </Box>
        <Box w='25%' fontSize='17px' pl={10}>
        <Flex w='80%' justifyContent='space-around' border='2px solid white' mt='-17px' p={3}>
          <Text className={clicked ? 'clicked' : 'nonClicked'} fontSize='30px' >
          <TbJewishStarFilled />
          </Text>
          <Text pt={1} fontSize='17px'>{count}</Text>
          <Text mt='-5px' _hover={{background:'#4e76ff'}} background='#4e76ff' className={clicked ? 'btnclicked' : 'btnnonClicked'}
          onClick={handleClick} p={2} borderRadius={10} fontSize='17px'>Say GM</Text>
        </Flex>
        </Box>
        <Flex fontSize='17px' fontWeight='bold' w='80%' justifyContent='space-around'>
          <Text className='Link_btns-dark'>About Me</Text>
          <Text className='Link_btns-dark'>Work Experience</Text>
          <Text className='Link_btns-dark'>Education</Text>
          <Text className='Link_btns-dark'>Testimonials</Text>
          <Text className='Link_btns-dark'>Contact Me</Text>
          {/* <Text className='Link_btns-dark'>Testimonials</Text> */}
        </Flex>
        
      </Flex>
    </Box>
   
    </>
  )
}

export default Navbar
