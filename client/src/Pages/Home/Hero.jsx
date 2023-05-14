import React, { useEffect, useState } from 'react'
import './index.css'
import { Box, Heading,Text,Flex,Image, Button} from '@chakra-ui/react'
import Education from './Education'
import HeroImage from '../../Images/HeroImage.gif'
import AboutMe from '../../Images/AboutMe.png'
import Experience from './Experience'
import WithSpeechBubbles from './Testimonials'
import Testimonials2 from './Testimonials2'
import {BsArrowRightSquareFill} from 'react-icons/bs'
import CBEBadge from '../../Images/CBEBadge.png'
import CCEBadge from '../../Images/CCEBadge.png'
import NLDBadge from '../../Images/NLDBadge.png'
import IITBBadge from '../../Images/IITBBadge.jpg'
import MUBadge from '../../Images/MUBadge.jpg'

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
    <Box className='hero' pt='80px'>
        <Flex>
        <Box w='55%' p={[5,5,10,10]}>
      <Text fontSize={['20px','25px','45px','55px']} fontWeight='bold' color='white'>Hello, this is  
       <span style={{color:'#f0b90b'}}> CryptoRohittt </span> 
      </Text>
      <Text color='white' fontSize='11px'>Certified Blockchain & Cryptocurrency Expert. Remote Based & India Raised. Speaks Web3 Marketing With a Finance Brain.</Text>
      <Button mt={5} _hover={{background:'#f0b90b'}} fontSize={['10px','5px','25px','25px']} p={['5px','5px','15px','35px']}>Contact me</Button>
      <Button mt={5} _hover={{color:'#252424', background:'white'}} ml={[5,5,5,10]} border='2px solid white' fontSize={['10px','5px','25px','25px']} background='transparent' p={['5px','5px','15px','35px']} color='white'>Portfolio</Button>


        <Flex gap={5} mt={10} w={['200%','200%','150%','100%']} justifyContent='space-around'>
            <Image transition='transform 0.5s' _hover={{transform:'translateY(-10px)'}} className='Logos' w={['55px','55px','155px','105px']} h={['55px','55px','155px','100px']} src={CBEBadge}/>
            <Image transition='transform 0.5s' _hover={{transform:'translateY(-10px)'}}  className='Logos' w={['55px','55px','155px','105px']} h={['55px','55px','155px','100px']} src={CCEBadge}/>
            <Image transition='transform 0.5s' _hover={{transform:'translateY(-10px)'}}  className='Logos' w={['55px','55px','155px','105px']} h={['55px','55px','155px','100px']} src={NLDBadge}/>
            <Image transition='transform 0.5s' _hover={{transform:'translateY(-10px)'}}  className='Logos' w={['55px','55px','155px','105px']} h={['55px','55px','155px','100px']} src={IITBBadge}/>
            <Image transition='transform 0.5s' _hover={{transform:'translateY(-10px)'}}  className='Logos' w={['55px','55px','155px','105px']} h={['55px','55px','155px','100px']} src={MUBadge}/>
        </Flex>
        </Box>
        <Box w='40%'>
        <Image borderRadius='50%' h={['180px','180px','230px','450px']} w={['300px','300px','250px','450px']} src={HeroImage}
        />
        </Box>
        </Flex>
    </Box>
        <Image zIndex={999999} mt='0px' src='https://dex-bin.bnbstatic.com/new/static/images/home/banner-bottom-bg.png'/>
        <Box fontSize='30px' w="5%" pb='30px' margin='auto' position='relative'>
        <div class="arrow" onClick={scrollToContact}>
        <span></span>
        <span></span>
        <span></span>
        </div>
        {/* <BsFillArrowDownSquareFill cursor='pointer' onClick={scrollToContact}/> */}
        </Box>



{/* //About me start from here */}

        <Box>
            <Text pt={10} fontSize={['45px','55px','55px','55px']} fontWeight='bold' textAlign='center' color='black'>About
            <span color='yellow' style={{color:'#f0b90b'}}> Me </span> 
            </Text>
            <Flex p={[5,2,5,10]} gap={20} direction={['column','column','column','row']}>
                <Image w={['100%','100%','100%',640]} h={[350,600,600,500]} p={[0,0,0,0]} src={AboutMe}/>
                <Box pt={['5px','20px','10px','80px']} w={['95%','95%','95%','45%']}>
                    <Text fontWeight='bold' fontSize='20px'>I am a Certified Blockchain & Cryptocurrency Expert with a Master's Degree in Management and a PGd in Blockchain Technology.
                </Text>
                <Text lineHeight='25px'>And my Engineering Bachelor's Degree has equipped me with a strong foundation in technology, which I have honed in my professional career over the past several years. With over three years of experience as a Strategic Consultant for Fortune-300 company and over three years as a Marketing Manager in Web3, I have gained expertise in defining strategies, driving marketing activities, managing PR/comms, executing and monitoring initiatives and campaigns, planning growth initiatives, and keeping a sharp eye on time management.
                </Text> 
                <br />
{showMore && (
        <p>I have ample experience in working with online and offline communities, creating and proofreading content, influencer marketing. My experience in my own crypto community means that I can moderate regional social media and chat groups effectively. I have also launched merchandise stores, grown Ambassador Programs, and completed end-to-end work on Influencer Marketing campaigns.

        My effective communication skills, honed through working remotely for the last three years, have allowed me to build strong relationships with colleagues and partners. I bring my web3 & finance & marketing expertise, experience, and skills to team and help drive growth from inside and out. Thank you for taking the time to visit my website, and please feel free to contact me with any questions or inquiries.
        </p>
      )}
                <Button _hover={{background:'black',color:'white'}} mt={[0,0,0,5]} border='2px solid black' fontSize={['15px','15px','15px','25px']} color='black' p={['15px','15px','15px','29px']} onClick={() => setShowMore(!showMore)}>Know More</Button>
                </Box>
            </Flex>
        </Box>

{/* Work Experience start from here */}


        <Box background='#1e2026'>
            <Image h={[10,20,20,150]} w='100%' src='https://dex-bin.bnbstatic.com/new/static/images/home/build-code-bg.png'/>
            <Text  data-aos="fade-up" boxShadow='rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset' mt={0} mb={10} fontSize={['30px','30px','35px','55px']} fontWeight='bold' textAlign='center' color='white'>Work
            <span color='yellow' style={{color:'#f0b90b'}}> Experience </span> 
            </Text>
            <Experience/>




            
            <Flex pt={5} justifyContent='space-around'>
            <Text fontSize='60px' pt={10} pb={10} fontWeight='bold' color='#f0b90b'>Education</Text>
            </Flex>
        <Education/>
        <Box position='relative' top={400} w='90%' m='auto'>
        <Text position='absolute' right={0} fontSize={40} onClick={handleClick} color='white'><BsArrowRightSquareFill/></Text>
        </Box>
      {showComponentOne ? <WithSpeechBubbles /> : <Testimonials2 />}
        </Box>
    </>
  )
}


export default Hero
