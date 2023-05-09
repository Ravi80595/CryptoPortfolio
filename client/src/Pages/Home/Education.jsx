import React, { useState } from 'react'
import { Flex,Box,Image,Text } from '@chakra-ui/react'

const Education = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxClick = (boxData) => {
    setSelectedBox(boxData);
  };
console.log(selectedBox)

const boxesData = [
  { id: 1, image:"https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png", title: "PGd in Blockchain Technology", description: "IIIT-B" },
  { id: 2, image:"https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png", title: "Blockchain & Crypto Expert", description: "Blockchain Council" },
  { id: 3, image:"https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png", title: "MBA - Finance", description: "University of Mumbai" },
];

const boxesData2=[
  { id: 1, image:"https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png", title: "Ethereum Developer", description: "Udemy" },
  { id: 2, image:"https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png", title: "Finance Expert", description: "NSE, India & Bloomberg" },
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
    >
      <Image src={boxData.image}/>
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
  {/* <Flex justifyContent='space-around' w='80%' m='auto'>
    <Box _hover={{mt:'-5px'}} borderRadius={20} bg='black' textAlign='center' w='300px' color='white'>
      <Image borderTopRadius={20} h='60%' w={'100%'} src='https://www.mim-essay.com/wp-content/uploads/2021/08/mba-1170x607-1.jpeg'/>
      <Text fontSize='20px' fontWeight='bold'>MBA</Text>
      <Text>N. L. Dalmia Institute of Management Studies and Research</Text>
    </Box>
    <Box _hover={{mt:'-5px'}} borderRadius={20} bg='black' textAlign='center' w='300px' color='white'>
      <Image borderTopRadius={20} h='60%' w={'100%'} src='https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/blockchain.png'/>
      <Text fontSize='20px' fontWeight='bold'>Blockchain</Text>
      <Text>International Institute of Information Technology Bangalore</Text>
    </Box>
    <Box _hover={{mt:'-5px'}} borderRadius={20} bg='black' textAlign='center' w='300px' color='white'>
      <Image borderTopRadius={20} h='60%' w={'100%'} src='https://www.clariwell.in/resources/uploads/Technical-Highlights-and-Roles-of-Mechanical-Design-Engineers.webp'/>
      <Text fontSize='20px' fontWeight='bold'>Mechanical</Text>
      <Text>University of Mumbai</Text>
    </Box>
  </Flex> */}
    <Flex justifyContent='space-around' width='80%' pt='40px' m='auto' gap={20}>
      <a href="https://www.credential.net/f4bc70c1-fe61-4e30-a7f1-4d3ba0fa0dbb#gs.vrnylh" target='blank'>
      <Box className='certificateBox'>
      <Image  w='100%' h='255px' p={3} objectFit='cover' src='https://enstinemuki.com/wp-content/uploads/2018/07/certificate.png'/>
      </Box>
      </a>
      <a href="https://www.credential.net/f4bc70c1-fe61-4e30-a7f1-4d3ba0fa0dbb#gs.vrnylh" target='blank'>
      <Box className='certificateBox'>
      <Image  w='100%' h='auto' p={3} objectFit='cover' src='https://www.blockchainbusinessinstitute.com/wp-content/uploads/2021/02/badge.png'/>
      </Box>
      </a>
      <a href="https://www.credential.net/f4bc70c1-fe61-4e30-a7f1-4d3ba0fa0dbb#gs.vrnylh" target='blank'>
      <Box className='certificateBox'>
      <Image  w='100%' h='auto' p={3} objectFit='cover' src='https://cdn.shopify.com/s/files/1/2137/1081/products/v1-eth_280x_7e700780-1d45-4984-9ed4-e63f3cafbf05.png?v=1669213683'/>
      </Box>
      </a>
      <a href="https://www.credential.net/f4bc70c1-fe61-4e30-a7f1-4d3ba0fa0dbb#gs.vrnylh" target='blank'>
      <Box className='certificateBox' >
      <Image  w='100%' h='auto' p={3} objectFit='cover' src='https://images.credly.com/images/579f0d59-3aaa-4779-bfc6-ec383533ce19/Badge_08003801.png'/>
      </Box>
      </a>
    </Flex>
</>
  )
}

export default Education
