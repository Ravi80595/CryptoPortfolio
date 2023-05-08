import { Box, Flex,Image,Text } from '@chakra-ui/react'
import React from 'react'

const Experience = () => {


return (
    <>
     <Flex gap={10} p={10}>
        <Box w='60%'>
        <Flex mb={10} gap={10} backgroundColor='white' p={10}>
        <Box>
            <Image src='https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png'/>
            <Text>Founder</Text>
            <Text>Description</Text>
        </Box>
        <Box>
            <Image src='https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png'/>
            <Text>Founder</Text>
            <Text>Description</Text>
        </Box>
        <Box>
            <Image src='https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png'/>
            <Text>Founder</Text>
            <Text>Description</Text>
        </Box>
        </Flex>
        <Flex w='50%' m='auto' backgroundColor='white' p={10} gap={20}>
        <Box>
            <Image src='https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png'/>
            <Text>Founder</Text>
            <Text>Description</Text>
        </Box>
        <Box>
            <Image src='https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png'/>
            <Text>Founder</Text>
            <Text>Description</Text>
        </Box>
        </Flex>
        </Box>
        <Box w='40%' p={10} bg='white'>
            <Image src='https://binance.ghost.io/content/images/2023/05/dappbay--4--2--1--1-1--2--2-1--1---1--1--1--1-1-1--1--1-1--1--5.png'/>
        </Box>
    </Flex> 
    </>
  )
}

export default Experience
