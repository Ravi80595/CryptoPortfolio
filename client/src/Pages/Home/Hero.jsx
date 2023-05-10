import React, { useEffect, useState } from 'react'
import './index.css'
import { Box, Heading,Text,Flex,Image, Button} from '@chakra-ui/react'
import Education from './Education'
import Imager from '../../Images/Imager.png'
import HeroImage from '../../Images/HeroImage.gif'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'
import AboutMe from '../../Images/AboutMe.png'
import Experience from './Experience'
import WithSpeechBubbles from './Testimonials'
import Testimonials2 from './Testimonials2'
import {BsArrowRightSquareFill} from 'react-icons/bs'


const Hero=()=>{
    const [showMore, setShowMore] = useState(false);
    const [showComponentOne, setShowComponentOne] = useState(true);
    const [scrollTop,setScrollTop]=useState(0)


    const onScroll=()=>{
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight-document.documentElement.clientHeight;
      const scrolled = (winScroll / height) *100;
      setScrollTop(scrolled)
    }
    useEffect(()=>{
      window.addEventListener("scroll",onScroll)
      return ()=>window.removeEventListener("scroll",onScroll)
    })
    const handleClick = () => {
      setShowComponentOne(!showComponentOne);
    };

    const scrollToContact = () => {
      window.scrollTo({
        top: 200000,
        behavior: 'smooth',
      });
    };

return (
    <>
    <Box className='hero' pt={30}>
        <Flex>
        <Box w='55%' p={10}>
      <Text fontSize='55px' fontWeight='bold' color='white'>Hello, this is  
       <span color='yellow' style={{color:'#f0b90b'}}> CryptoRohittt </span> 
      </Text>
      <Text color='white' fontSize='11px'>Certified Blockchain & Cryptocurrency Expert. Remote Based & India Raised. Speaks Web3 Marketing With a Finance Brain.</Text>
      <Button mt={5} _hover={{background:'#f0b90b'}} fontSize='25px' p='35px'>Contact me</Button>
      <Button mt={5} _hover={{color:'#252424', background:'white'}} ml={10} border='2px solid white' fontSize='25px' background='transparent' p='35px' color='white'>Portfolio</Button>
        <Flex mt={5} justifyContent='space-around'>
            <Image borderRadius={20} border='2px solid white' bg='black' w={100} src='https://www.blockchainbusinessinstitute.com/wp-content/uploads/2021/02/badge.png'/>
            <Image borderRadius={20} border='2px solid white' bg='black' w={100} src='https://enstinemuki.com/wp-content/uploads/2018/07/certificate.png'/>
            <Image borderRadius={20} border='2px solid white' bg='black' w={100} src='https://www.iiitb.ac.in/includefiles/userfiles/images/IIITB-invert-logo.png'/>
            <Image borderRadius={20} border='2px solid white' bg='black' w={100} src='https://t3.ftcdn.net/jpg/04/70/33/84/360_F_470338475_4MS75EMuTq74dkrxKdnUCgzJICObcxil.jpg'/>
            <Image borderRadius={20} border='2px solid white' bg='black' w={100} src='https://www.blockchainbusinessinstitute.com/wp-content/uploads/2021/02/badge.png'/>
        </Flex>
        </Box>
        <Box w='40%'>
        <Image borderRadius='50%' h={450} w={460} src={HeroImage}
        />
        </Box>
        </Flex>
    </Box>
        <Image zIndex={999999} mt='0px' src='https://dex-bin.bnbstatic.com/new/static/images/home/banner-bottom-bg.png'/>
        <Box fontSize='30px' w="5%" pb='30px' margin='auto'>
        <BsFillArrowDownSquareFill cursor='pointer' onClick={scrollToContact}/>
        </Box>
        <Box>
            <Text fontSize='55px' fontWeight='bold' textAlign='center' color='black'>About
            <span color='yellow' style={{color:'#f0b90b'}}> Me </span> 
            </Text>
            <Flex p={10} gap={20} >
                <Image borderRadius={40} w={600} h={600} p={10} src={AboutMe}/>
                <Box pt='80px' w='45%'>
                    <Text fontWeight='bold' fontSize='20px'>I am a Certified Blockchain & Cryptocurrency Expert with a Master's Degree in Management and a PGd in Blockchain Technology.
                </Text>
                <Text lineHeight='25px'>And my Engineering Bachelor's Degree has equipped me with a strong foundation in technology, which I have honed in my professional career over the past several years. With over three years of experience as a Strategic Consultant for Fortune-300 company and over three years as a Marketing Manager in Web3, I have gained expertise in defining strategies, driving marketing activities, managing PR/comms, executing and monitoring initiatives and campaigns, planning growth initiatives, and keeping a sharp eye on time management.
                </Text>
{showMore && (
        <p>I have ample experience in working with online and offline communities, creating and proofreading content, influencer marketing. My experience in my own crypto community means that I can moderate regional social media and chat groups effectively. I have also launched merchandise stores, grown Ambassador Programs, and completed end-to-end work on Influencer Marketing campaigns.

        My effective communication skills, honed through working remotely for the last three years, have allowed me to build strong relationships with colleagues and partners. I bring my web3 & finance & marketing expertise, experience, and skills to team and help drive growth from inside and out. Thank you for taking the time to visit my website, and please feel free to contact me with any questions or inquiries.
        </p>
      )}
                <Button mt={5} border='2px solid black' fontSize='25px' color='black' p='35px' onClick={() => setShowMore(!showMore)}>{showMore?'Know less':'Know more'}</Button>
                </Box>
            </Flex>
        </Box>
        <Box background='#1e2026'>
            <Image h={150} w='100%' src='https://dex-bin.bnbstatic.com/new/static/images/home/build-code-bg.png'/>
            <Text mt={0} mb={10} fontSize='55px' fontWeight='bold' textAlign='center' color='white'>Work
            <span color='yellow' style={{color:'#f0b90b'}}> Experience </span> 
            </Text>
            <Experience/>
            <Flex pt={5} justifyContent='space-around'>
            <Text fontSize='60px' pt={10} pb={10} fontWeight='bold' color='#f0b90b'>Education</Text>
            </Flex>
        <Education/>
        <Box position='relative' top={420}>
        <Text position='absolute' right={5} fontSize={40} onClick={handleClick} color='white'><BsArrowRightSquareFill/></Text>
        </Box>
      {showComponentOne ? <WithSpeechBubbles /> : <Testimonials2 />}
        </Box>
    </>
  )
}


export default Hero
