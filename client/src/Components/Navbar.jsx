import { Box,Flex,Text,Button,Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import '../Pages/Home/index.css'
import './Navbar.css'
import {TbJewishStarFilled} from 'react-icons/tb'
import MobNav from './MobNav'

const Navbar = () => {
  const [count,setCount]=useState(0)
  const [clicked, setClicked] = useState(false);
 

  const handleClick = () => {
    setCount(count+1)
    setClicked(true);
    // setTimeout(() => {
    //   setClicked(false);
    // }, 600);
  };


return (
  <>
    <Box className='Laptop-view'>
      <Flex pt={8} pl={10}>
        {/* <Box w='16%'>
          <Text mt={0} fontSize='17px' fontWeight='bold'>www.cryptorohittt.com</Text>
        </Box> */}
        <Box w='25%' fontSize='17px' pl={10}>
        <Flex w='90%' justifyContent='space-around' mt='-17px' p={3}>

          <Flex w='20px' background='transparent'>
            <img src="https://cdn131.picsart.com/324743581197211.png" alt="icon"/>
            <img src="https://cdn131.picsart.com/324743581197211.png" alt="icon"/>
            <img src="https://cdn131.picsart.com/324743581197211.png" alt="icon"/>
          </Flex>

          <Text pl={10} className={clicked ? 'clicked' : 'nonClicked'} fontSize='30px' >
          <TbJewishStarFilled />
          </Text>

          <Text pt={1} fontSize='17px'>{count}</Text>
          <Button color='black' mt='-5px' _hover={{background:'#f0b90b',color:'black'}} background='#f0b90b' className={clicked ? 'btnclicked' : 'btnnonClicked'}
          onClick={handleClick} p={2} borderRadius={10} isDisabled={clicked} fontSize='17px'>
            {clicked?'said gm':'say gm'}</Button>
        </Flex>
        </Box>
        <Flex fontSize='17px' fontWeight='bold' w='80%' justifyContent='space-around'>
          <Text className='Link_btns-dark'>About Me</Text>
          <Text className='Link_btns-dark'>Work Experience</Text>
          <Text className='Link_btns-dark'>Education</Text>
          <Text className='Link_btns-dark'>Testimonials</Text>
          <Text className='Link_btns-dark'>Recent Posts</Text>
          <Text className='Link_btns-dark'>Contact Me</Text>
          {/* <Text className='Link_btns-dark'>Testimonials</Text> */}
        </Flex>
        
      </Flex>
    </Box>
    <div className='mobileDiv'>
            <MobNav />
        </div>
    </>
  )
}

export default Navbar
