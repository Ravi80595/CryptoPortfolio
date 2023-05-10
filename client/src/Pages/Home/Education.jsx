import React, { useState } from 'react'
import { Flex,Box,Image,Text } from '@chakra-ui/react'

const Education = () => {
  const [selectedBox, setSelectedBox] = useState(null);

const handleBoxClick = (boxData) => {
  setSelectedBox(boxData);
};

const boxesData = [
  { id: 1, image:"https://www.olecde.com/wp-content/uploads/2021/02/FI_PGDSDSB.jpg", title: "PGd in Blockchain Technology", description: "IIIT-B" },
  { id: 2, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjKxKp2okqd2i6bju3T1EC8c4e2d1qx2vzQV2mKdvKXiBu27lDeCV67yFGHhgSYQduuc&usqp=CAU", title: "Blockchain & Crypto Expert", description: "Blockchain Council" },
  { id: 3, image:"https://mangalmay.org/blog/wp-content/uploads/2018/06/bloi.jpg", title: "MBA - Finance", description: "University of Mumbai" },
];

const boxesData2=[
  { id: 1, image:"data:image/jpeg;base64,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", title: "Ethereum Developer", description: "Udemy" },
  { id: 2, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRTpf_kq-cHVilh9zdF-sQL-9Kk5Z8hAkcgQRox2qVeP6-gJ3__kORsdYiH3jnmJ1xlQ&usqp=CAU", title: "Finance Expert", description: "NSE, India & Bloomberg" },
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
      w={200}
    >
      <Image h={150} src={boxData.image}/>
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
