import React, { useState } from 'react'
import './index.css'
import { Box, Heading,Text,Flex,Image, Button} from '@chakra-ui/react'
import Education from './Education'
import Imager from '../../Images/Imager.png'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'
import AboutMe from '../../Images/AboutMe.png'
import Experience from './Experience'

const Hero=()=>{
    const [showMore, setShowMore] = useState(false);


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
            <Image w={100} src='https://www.blockchainbusinessinstitute.com/wp-content/uploads/2021/02/badge.png'/>
            <Image w={100} src='https://enstinemuki.com/wp-content/uploads/2018/07/certificate.png'/>
            <Image w={100} src='https://www.blockchainbusinessinstitute.com/wp-content/uploads/2021/02/badge.png'/>
            <Image w={100} src='https://www.blockchainbusinessinstitute.com/wp-content/uploads/2021/02/badge.png'/>
            <Image w={100} src='https://www.blockchainbusinessinstitute.com/wp-content/uploads/2021/02/badge.png'/>
        </Flex>
        </Box>

        <Box>
        <Image borderRadius='50%' h={450} w={460} src={Imager}
        />
        {/* 'https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-02.png' */}
        </Box>
        </Flex>
    </Box>
        <Image zIndex={999999} mt='0px' src='https://dex-bin.bnbstatic.com/new/static/images/home/banner-bottom-bg.png'/>
        <Box fontSize='30px' w="5%" pb='30px' margin='auto'>
        <BsFillArrowDownSquareFill/>
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
            <Text mt={0} mb={20} fontSize='55px' fontWeight='bold' textAlign='center' color='white'>Work
            <span color='yellow' style={{color:'#f0b90b'}}> Experience </span> 
            </Text>
            <Experience/>
            <Flex justifyContent='space-around'>
                <Box  className='workBox' borderRadius={10} w={300} color='white' border='2px solid grey' background='#181a1e'>
                    <Image  borderRadius={10} borderBottomRadius='0' w='100%' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cryptocurrency-logo-design-template-cd2275b80fff78aafcf5c4c6b74cede7_screen.jpg?ts=1647276957'/>
                    <Text fontWeight='bold' fontSize='20px' textAlign='center'>Community Founder</Text>
                    <Text textAlign='center'>Apr 2021 - Present</Text>
                    <Text p={5}>Founder of Blockchain Noodles Community, a place where I help people learn about blockchain and cryptocurrency for free. Join @BNX_world on Telegram and Twitter or visit www.bnx.world for more</Text>
                </Box>
                <Box  className='workBox' color='white' border='2px solid grey' background='#181a1e'>
                    <Image  borderRadius={10} borderBottomRadius='0' w='100%' src='https://media.licdn.com/dms/image/D560BAQGfqkMarLifBw/company-logo_200_200/0/1680775422786?e=1691020800&v=beta&t=DxkAkdkp223j0rPVpF8KAX6gW_UWycxvs7hprphgObQ'/>
                    <Text fontWeight='bold' fontSize='20px' textAlign='center'>Head of Marketing</Text>
                    <Text textAlign='center'>Apr 2022 - Mar 2023</Text>
                    <Text p={5}>Joined gDEX as Head of Marketing in March 2022 with a team from across the world. But with my continued excellent performance and supportive attitude in my role, the Company increased my responsibilities like taking care of other departments.</Text>
                </Box>
                <Box className='workBox' color='white' border='2px solid grey' background='#181a1e'>
                    <Image  borderRadius={10} borderBottomRadius='0' w='100%' src='https://media.licdn.com/dms/image/C4D0BAQG7UCjq86P_ig/company-logo_200_200/0/1674796709225?e=1691020800&v=beta&t=-cff0rs2Q5-Mih2lZydmv4H1rDLt2LNGQ752es8olCI'/>
                    <Text fontWeight='bold' fontSize='20px' textAlign='center'>Crypto Marketing Generalist</Text>
                    <Text textAlign='center'>Mar 2021 - Apr 2022</Text>
                    <Text p={5}>Helped WazirX reach from 1 million user-base to 12+ million user-base at the peak of crypto bull run. Managed end-to-end solutions to Influencers, weekly YouTube crypto show and ambassador program. Responsible for launching India's first CEX merch store. </Text>
                </Box>
                <Box className='workBox' color='white' border='2px solid grey' background='#181a1e'>
                    <Image  borderRadius={10} borderBottomRadius='0' w='100%' src='https://media.licdn.com/dms/image/C560BAQF0KfQjWigTjg/company-logo_200_200/0/1672975372779?e=1691020800&v=beta&t=p56zhHvJr-M7PvF6DslbJhgYtfcjAqy9UUd-wJn52nY'/>
                    <Text fontWeight='bold' fontSize='20px' textAlign='center'>Web3 Marketing Advisor </Text>
                    <Text textAlign='center'>Sep 2021 - Jan 2022</Text>
                    <Text p={5}>Helped in Evaluating, Planning, Executing and Monitoring India Strategy for YIELD App.</Text>
                </Box>
            </Flex>
            <Flex pt={5} justifyContent='space-around'>
                <Text fontSize='60px' pt={20} pb={10} fontWeight='bold' color='#f0b90b'>Education</Text>
        </Flex>
        <Education/> 
            
            
        </Box>
    </>
  )
}


export default Hero
