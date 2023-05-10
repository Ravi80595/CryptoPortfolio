import { Box, Flex,Image,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import WazirXLogo from '../../Images/WazirXLogo.png'
import Knight from '../../Images/Knight.png'


const Experience = () => {
    const [data,setData]=useState([])
    const [selectedBox, setSelectedBox] = useState(null);

    const handleBoxClick = (boxData) => {
      setSelectedBox(boxData);
    };


const boxesData = [
    { id: 1, image:"https://lambda-apis.vercel.app/ogImage/company/62eb4293981ac9000432309a.png", title: "Head of Marketing | gDEX Metaverse", description: "Social media content planning, writing & distribution Organising game tournaments with games & guilds Press releases, articles & blogs management BD and partnerships with new games & guilds" },
    { id: 2, image:WazirXLogo, title: "Senior Marketing Manager | WazirX", description: " WazirX is India’s biggest cryptocurrency exchange and an acquired company by Binance. Details of my contribution in WazirX is here: linktr.ee/rohitwazirx Managed the biggest crypto ambassador program in the world with 500+ crypto community managers of India" },
    { id: 3, image:"https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png", title: "Crypto Marketing Consultant | Freelancer", description: "Working with crypto startups and DAOs across the world in helping grow their community, align marketing strategies, media articles, social media management, press releases, influencer marketing etc." },
];

const boxesData2=[
    { id: 1, image:"https://m.economictimes.com/thumb/msid-89040389,width-640,height-480,resizemode-4,imgsize-39106/header_-1.jpg", title: "Founder | Blockchain Noodles & MumbaiDAO", description: "Blockchain Noodles is a community of 500 members across Telegram, Twitter and LinkedIn where I help people start their journey in crypto. The objective is to help no-coiners in onboarding the space and learning from experience from fellow members." },
    { id: 2, image:Knight, title: "Strategic Consultant | CBRE & Knight Frank", description: "Part of Strategic Consulting teams for project management & project feasibility strategies for multi-million dollar projects & clients from around the world." },
]



return (
    <>
     <Flex gap={10} p={10}>
        <Box w='60%'>
        <Flex mb={10} gap={10} backgroundColor='white' p={10}>
        {boxesData && boxesData.map((boxData) => (
          <Box cursor='pointer' p={2} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
            key={boxData.id}
            data={boxData}
            onClick={() => handleBoxClick(boxData)}
          >
            <Image src={boxData.image}/>
            <Text>{boxData.title}</Text>
            <Text  fontSize={10}>{boxData.description}</Text>
          </Box>
        ))}
        </Flex>
        <Flex w='80%' m='auto' backgroundColor='white' p={10} gap={20}>
        {boxesData2 && boxesData2.map((boxData) => (
          <Box cursor='pointer' p={2} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px'
            key={boxData.id}
            data={boxData}
            onClick={() => handleBoxClick(boxData)}
            w={200}
          >
            <Image w='100%' h={150} src={boxData.image}/>
            <Text>{boxData.title}</Text>
            <Text  fontSize={10}>{boxData.description}</Text>
          </Box>
        ))}
        </Flex>
        </Box>
        <Box w='40%' p={5} bg='white'>
            <Image h={400} src={selectedBox && selectedBox.image}/>
            <Text pt={2} fontSize={20} fontWeight='bold'>{selectedBox && selectedBox.title}</Text>
            <Text pt={2}>{selectedBox && selectedBox.description}</Text>
        </Box>
    </Flex> 
    </>
  )
}

export default Experience
