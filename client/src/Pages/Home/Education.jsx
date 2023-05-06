import React from 'react'
import { Flex,Box,Image,Text } from '@chakra-ui/react'

const Education = () => {


return (
  <>
  <Flex justifyContent='space-around' w='80%' m='auto'>
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
  </Flex>
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
  {/* <Flex justifyContent='space-around'>
  <Box  className='eduBox' borderRadius={10} w={300} color='white' border='2px solid grey' background='#181a1e'>
      <Image h='50%' borderRadius={10} borderBottomRadius='0' w='100%' src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cryptocurrency-logo-design-template-cd2275b80fff78aafcf5c4c6b74cede7_screen.jpg?ts=1647276957'/>
      <Text fontWeight='bold' fontSize='20px' textAlign='center'>Mechanical Engineering</Text>
      <Text textAlign='center'>Apr 2021 - Present</Text>
      <Text p={5}>University of Mumbai</Text>
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
</Flex> */}
</>
  )
}

export default Education
