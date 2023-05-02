import React from 'react'
import './index.css'
import { Box, Heading,Text,Flex,Image, Button} from '@chakra-ui/react'

const Hero = () => {


return (
    <>
    <Box className='hero' pt={30}>
        <Flex>
        <Box w='55%' p={10}>
      <Text fontSize='55px' fontWeight='bold' color='white'>Experience &  
       <span color='yellow' style={{color:'yellow'}}> Certified </span> 
      Blockchain Expert</Text>
      <Text color='white' w='85%'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, temporibus. elit. Aliquid, temporibus</Text>
      <Button mt={5} _hover={{background:'yellow'}} fontSize='25px' p='35px'>Contact me</Button>
      <Button mt={5} ml={10} border='2px solid white' fontSize='25px' background='transparent' p='35px' color='white'>Portfolio</Button>
        </Box>

        <Box>
        <Image zIndex={999999999} w={550} src='https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-02.png'/>
        </Box>
        </Flex>
    </Box>
        <Image mt='0px' src='https://dex-bin.bnbstatic.com/new/static/images/home/banner-bottom-bg.png'/>
        <Box>
            <Text fontSize='55px' fontWeight='bold' textAlign='center' color='black'>About
            <span color='yellow' style={{color:'yellow'}}> me </span> 
            </Text>
            <Flex p={10} gap={20} >
                <Image h={600} p={10} src='https://themegenix.net/wp/nerko/wp-content/uploads/2022/12/features-07.png'/>
                <Box pt='80px' w='35%'>
                    <Text fontWeight='bold' fontSize='50px'>Lorem ipsum dolor sit amet.</Text>
                    <Text lineHeight='25px'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam magni quod pariatur dicta eos, asperiores vero reiciendis maxime hic temporibus quasi ipsa architecto dolorem nulla voluptatum dolorum iusto qui nobis rem. Tempore voluptates deleniti harum, animi, explicabo magnam esse mollitia soluta aliquid eaque velit omnis!</Text>
                <Button mt={5} border='2px solid black' fontSize='25px' color='black' p='35px'>Know more</Button>
                </Box>
            </Flex>
        </Box>
        <Box background='#1e2026'>
            <Image h={150} w='100%' src='https://dex-bin.bnbstatic.com/new/static/images/home/build-code-bg.png'/>
            <Text mt={0} mb={20} fontSize='55px' fontWeight='bold' textAlign='center' color='black'>Work
            <span color='yellow' style={{color:'yellow'}}> Experience </span> 
            </Text>
            <Flex justifyContent='space-around'>
                <Box borderRadius={10} w={300} color='white' border='2px solid grey' background='#181a1e' h='560px'>
                    <Image  borderRadius={10} borderBottomRadius='0' w='100%' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cryptocurrency-logo-design-template-cd2275b80fff78aafcf5c4c6b74cede7_screen.jpg?ts=1647276957'/>
                    <Text fontWeight='bold' fontSize='20px' textAlign='center'>Community Founder</Text>
                    <Text textAlign='center'>Apr 2021 - Present</Text>
                    <Text p={5}>Founder of Blockchain Noodles Community, a place where I help people learn about blockchain and cryptocurrency for free. Join @BNX_world on Telegram and Twitter or visit www.bnx.world for more</Text>
                </Box>
                <Box h='570px' mt={20} borderRadius={10} w={300} color='white' border='2px solid grey' background='#181a1e'>
                    <Image  borderRadius={10} borderBottomRadius='0' w='100%' src='https://media.licdn.com/dms/image/D560BAQGfqkMarLifBw/company-logo_200_200/0/1680775422786?e=1691020800&v=beta&t=DxkAkdkp223j0rPVpF8KAX6gW_UWycxvs7hprphgObQ'/>
                    <Text fontWeight='bold' fontSize='20px' textAlign='center'>Head of Marketing</Text>
                    <Text textAlign='center'>Apr 2022 - Mar 2023</Text>
                    <Text p={5}>Joined gDEX as Head of Marketing in March 2022 with a team from across the world. But with my continued excellent performance and supportive attitude in my role, the Company increased my responsibilities like taking care of other departments.</Text>
                </Box>
                <Box h='600px' borderRadius={10} w={300} color='white' border='2px solid grey' background='#181a1e'>
                    <Image  borderRadius={10} borderBottomRadius='0' w='100%' src='https://media.licdn.com/dms/image/C4D0BAQG7UCjq86P_ig/company-logo_200_200/0/1674796709225?e=1691020800&v=beta&t=-cff0rs2Q5-Mih2lZydmv4H1rDLt2LNGQ752es8olCI'/>
                    <Text fontWeight='bold' fontSize='20px' textAlign='center'>Crypto Marketing Generalist</Text>
                    <Text textAlign='center'>Mar 2021 - Apr 2022</Text>
                    <Text p={5}>Helped WazirX reach from 1 million user-base to 12+ million user-base at the peak of crypto bull run. Managed end-to-end solutions to Influencers, weekly YouTube crypto show and ambassador program. Responsible for launching India's first CEX merch store. </Text>
                </Box>
                <Box h='500px' mt={20} borderRadius={10} w={300} color='white' border='2px solid grey' background='#181a1e'>
                    <Image  borderRadius={10} borderBottomRadius='0' w='100%' src='https://media.licdn.com/dms/image/C560BAQF0KfQjWigTjg/company-logo_200_200/0/1672975372779?e=1691020800&v=beta&t=p56zhHvJr-M7PvF6DslbJhgYtfcjAqy9UUd-wJn52nY'/>
                    <Text fontWeight='bold' fontSize='20px' textAlign='center'>Web3 Marketing Advisor </Text>
                    <Text textAlign='center'>Sep 2021 - Jan 2022</Text>
                    <Text p={5}>Helped in Evaluating, Planning, Executing and Monitoring India Strategy for YIELD App.</Text>
                </Box>
            </Flex>
            
                              {/* Education */}

            <Flex pt={10} justifyContent='space-around'>
                <Image h={300} src='https://dex-bin.bnbstatic.com/new/static/images/home/bas-bg.png'/>
                <Text fontSize='60px' pt={40} fontWeight='bold' color='Yellow'>Education</Text>
                <Image h={300} src='https://dex-bin.bnbstatic.com/new/static/images/home/bas-bg.png'/>
            </Flex>
            <Box background='#1e2026' pt={0}>
                <Flex justifyContent='space-around' gap='20px' p={20}>
                    <Box w='50%'>
                    <Flex>
                    <Image src='https://dex-bin.bnbstatic.com/new/static/images/home/slash.svg'/>
                        <Image src='https://dex-bin.bnbstatic.com/new/static/images/home/slash.svg'/>
                        <Text fontSize='20px' ml={3} color='white' fontWeight='bold'>International Institute of Information Technology Bangalore</Text>
                    </Flex>
                    <Text pl={10} color='white'>International Institute of Information Technology Bangalore
                    PG Diploma in Software Development (Blockchain), Ethereum and Hyperledger Fabric</Text>
                    </Box>
                    <Box w='50%'>
                    <Flex>
                    <Image src='https://dex-bin.bnbstatic.com/new/static/images/home/slash.svg'/>
                        <Image src='https://dex-bin.bnbstatic.com/new/static/images/home/slash.svg'/>
                        <Text fontSize='20px' ml={3} color='white' fontWeight='bold'>
N. L. Dalmia Institute of Management Studies and Research</Text>
                    </Flex>
                    <Text pl={10} color='white'>Master of Business Administration - MBA, Finance </Text>
                    </Box>
                </Flex>
                <Flex justifyContent='space-around' gap='20px' p={20} pt={0}>
                    <Box w='50%'>
                    <Flex>
                    <Image src='https://dex-bin.bnbstatic.com/new/static/images/home/slash.svg'/>
                        <Image src='https://dex-bin.bnbstatic.com/new/static/images/home/slash.svg'/>
                        <Text fontSize='20px' ml={3} color='white' fontWeight='bold'>
                        University of Mumbai</Text>
                    </Flex>
                    <Text pl={10} color='white'>Engineering, Automobile / Mechanical </Text>
                    </Box>
                    <Box w='50%'>
                    {/* <Flex>
                    <Image src='https://dex-bin.bnbstatic.com/new/static/images/home/slash.svg'/>
                        <Image src='https://dex-bin.bnbstatic.com/new/static/images/home/slash.svg'/>
                        <Text fontSize='20px' ml={3} color='white' fontWeight='bold'>International Institute of Information Technology Bangalore</Text>
                    </Flex> */}
                    {/* <Text pl={10} color='white'>International Institute of Information Technology Bangalore
                    PG Diploma in Software Development (Blockchain), Ethereum and Hyperledger Fabric</Text> */}
                    </Box>
                </Flex>
            </Box>
            
        </Box>
    </>
  )
}


export default Hero
