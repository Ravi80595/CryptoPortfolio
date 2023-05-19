import React, { useState } from 'react'
import { Flex,Box,Image,Text } from '@chakra-ui/react'

const Education = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [clickedImage, setClickedImage] = useState(null);


const handleBoxClick = (boxData) => {
  setSelectedBox(boxData);
  setClickedImage(boxData.id);
};

const boxesData = [
  { id: 1, image:"https://www.olecde.com/wp-content/uploads/2021/02/FI_PGDSDSB.jpg", title: "Post Graduate Diploma in Blockchain Technology", description: "During my Post Graduate Diploma course in software development specializing in Blockchain technology, I not only gained a solid foundation in programming, data structures, algorithms, and blockchain fundamentals, but it also helped me become a better crypto marketing manager. The course gave me a deep understanding of blockchain technology, which allowed me to better communicate with developers and technical teams. I was able to apply my knowledge of blockchain technology to develop innovative marketing strategies that focused on the benefits and unique features of blockchain-based products.Through my studies, I also gained experience in smart contract development, DAPP development, and Hyperledger Fabric. This knowledge has allowed me to identify and explore new marketing opportunities in the blockchain space. It has helped me to create targeted campaigns that appeal to blockchain enthusiasts and those interested in the benefits of decentralized technology.The course's capstone projects were an invaluable experience for me. They allowed me to apply my knowledge in a real-world setting and develop projects that were available on my GitHub profile. These projects were useful in demonstrating my technical skills to potential employers and clients. Overall, my Post Graduate Diploma course in software development specializing in Blockchain technology has been instrumental in preparing me for my career as a crypto marketing manager. It has given me the knowledge and tools to develop and execute effective marketing strategies in the blockchain space, work effectively with developers and technical teams, and stay up-to-date with the latest developments in the field." },
  { id: 2, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbjKxKp2okqd2i6bju3T1EC8c4e2d1qx2vzQV2mKdvKXiBu27lDeCV67yFGHhgSYQduuc&usqp=CAU", title: "Blockchain & Cryptocurrency Expert ", description: "Completing the Certified Blockchain Expert and Certified Cryptocurrency Expert courses from The Blockchain Council provided me with an in-depth understanding of the fundamental concepts of blockchain technology and how it is shaping the world of web3. The courses covered a wide range of topics, including the origin and introduction of blockchain technology, distributed ledgers, P2P networks, types of blockchains and architectures, tokenization and different token standards, the blockchain ecosystem and its components, Merkle tree, public-private keys, mining, transaction UTXOs, smart contracts, consensus algorithms, use cases in different industries, tokenomics, centralized and decentralized exchanges, crypto derivative products like futures and options, legality and taxations, common scams, and more.These courses helped me develop a deeper understanding of blockchain technology from a developer's point of view, which is invaluable in my current role as a marketing manager in web3. I appreciate the moving components involved in the development of a web3 product and have a better understanding of the development constraints that come with it. This has enabled me to communicate more effectively with developers and other technical stakeholders. Additionally, the courses helped me develop a better understanding of the problems that blockchain technology can solve, which is crucial in identifying use cases and developing targeted marketing strategies. Overall, these courses have been instrumental in my professional growth and have provided me with the skills and knowledge needed to succeed in the world of blockchain technology." },
  { id: 3, image:"https://mangalmay.org/blog/wp-content/uploads/2018/06/bloi.jpg", title: "MBA - Finance", description: "During my 2-year MBA course specializing in Finance, I gained a diverse range of skills that have been instrumental in my professional growth. I studied a wide range of topics, including business communication, corporate law, financial derivatives, marketing management, statistics, business ethics, MIS, corporate finance, equity valuation, management accounting, and international business. These topics provided me with a well-rounded understanding of the business world and the skills needed to succeed in it.One of the most important skills I gained during my MBA was effective communication. The course provided me with the tools to articulate my ideas and communicate effectively with a wide range of stakeholders. Additionally, the course emphasized the importance of being a team player, working hard, and being dedicated to achieving one's goals. This experience helped me develop a strong work ethic and the self-motivation needed to succeed in any professional environment. The MBA course also helped me develop analytical skills, a focused mindset, and goal-oriented thinking. I learned how to analyze complex business problems and develop effective solutions. This skill has been valuable in my career as a marketing manager, where I need to be able to analyze data and develop targeted marketing strategies that meet the needs of my clients and customers. The course also provided me with the leadership skills needed to become a successful team leader and manage teams effectively.Overall, the 2-year MBA course specializing in Finance has been instrumental in my professional growth and helped me become a well-rounded and successful business professional. It provided me with the skills and knowledge needed to succeed in the competitive world of business." },
];

const boxesData2=[
  { id: 4, image:"https://elearning.kba.ai/img/CED1.png", title: "Ethereum Developer", description: "Completing the Certified Ethereum Developer courses has helped me gain a deeper understanding of blockchain technology, particularly in the Ethereum ecosystem. Through the course, I learned Solidity programming by building projects and gained a practical understanding of blockchain and smart contract usage. I also learned how to use Ethereum's core development tools, like Truffle, Remix, and OpenZeppelin. Moreover, I learned how decentralized technology works and the purpose and structure of Solidity code. All of these skills have helped me better understand the technical aspects of cryptocurrency and blockchain, enabling me to communicate better with developers and product managers. As a crypto marketing manager, this has allowed me to better evaluate the technical feasibility of certain marketing strategies and work with the development team to create more effective campaigns. Additionally, my understanding of ERC20 token development and NFT development has been helpful in creating successful marketing campaigns for blockchain-based projects." },
  { id: 5, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzRTpf_kq-cHVilh9zdF-sQL-9Kk5Z8hAkcgQRox2qVeP6-gJ3__kORsdYiH3jnmJ1xlQ&usqp=CAU", title: "Finance Expert", description: "The certifications from National Stock Exchange and Bloomberg have equipped me with a strong foundation in finance, particularly in areas such as equity derivatives, financial markets, commodities, equities, fixed income financial instruments, and more. Through these courses, I gained a deeper understanding of financial products, enabling me to analyze them more effectively and make informed decisions. I also developed an analytical mindset, which helped me to quickly understand complex financial concepts and apply them in real-world scenarios. As a result, I was able to improve my analytical thinking skills, which have been instrumental in my career growth as a crypto marketing manager.In addition to acquiring knowledge in finance, the certifications have also honed my soft skills, such as effective communication, time management, and teamwork. In finance, clear communication is crucial, especially when dealing with clients or colleagues who may have limited knowledge about financial instruments. The courses taught me how to present complex financial concepts in a simple and straightforward manner. Time management and teamwork skills have been essential in meeting deadlines and working collaboratively with different teams. These skills have been crucial in my current role as a crypto marketing manager, where I interact with various teams and stakeholders on a regular basis." },
]


return (
  <>
  <Flex gap={10} p={[2,2,5,5]} direction={['column-reverse','column-reverse','column-reverse','row']}>
  <Box w={['99%','99%','99%','55%']}>
  <Flex mb={5} gap={[3,3,3,10]} overflowX='auto' maxWidth={['99%','99%','99%','99%']} p={[2,2,10,5]} pt={[5,5,5,5]}>
  {boxesData && boxesData.map((boxData) => (
    <Box cursor='pointer'
      key={boxData.id}
      data={boxData}
      onClick={() => handleBoxClick(boxData)}
      w={'350px'}
      borderRadius={10}
      bg='black'
            color='white'
            boxShadow='rgb(242 255 0 / 16%) 0px 10px 9px 0px, rgb(255 221 0 / 6%) 0px 0px 0px 1px'
            style={{
              transition: 'transform 0.5s, filter 0.5s',
              transform: clickedImage === boxData.id ? 'translateY(-15px)' : 'none',
      }}
    >
      <Image
      style={{
        filter: clickedImage === boxData.id ? 'none' : 'grayscale(100%)',
        transition: 'filter 0.5s',
      }}
      className='image' filter='grayscale(100%)' borderRadius={10} borderBottomRadius={0} w='100%' h={100} src={boxData.image}/>
      <Text p={1} fontSize={['7px','10px','15px',10]}>{boxData.title}</Text>
      <Text p={1} fontSize={['7px','10px','15px',10]}>{boxData.description.length>10?boxData.description.slice(0, 100) + "...":'r'}</Text>
    </Box>
  ))}
  </Flex>
  <Flex w='80%' m='auto' gap={[6,5,10,20]}>
  {boxesData2 && boxesData2.map((boxData) => (
    <Box cursor='pointer'
      key={boxData.id}
      data={boxData}
      onClick={() => handleBoxClick(boxData)}
      w={'300px'}
      borderRadius={10}
      bg='black'
            color='white'
            boxShadow='rgb(242 255 0 / 16%) 0px 10px 9px 0px, rgb(255 221 0 / 6%) 0px 0px 0px 1px'
            style={{
              transition: 'transform 0.5s, filter 0.5s',
              transform: clickedImage === boxData.id ? 'translateY(-15px)' : 'none',
            }}
    >
      <Image
      style={{
        filter: clickedImage === boxData.id ? 'none' : 'grayscale(100%)',
        transition: 'filter 0.5s',
      }}
      className='image' filter='grayscale(100%)' borderRadius={10} borderBottomRadius={0} w='100%' h={100} src={boxData.image}/>
      <Text p={1} fontSize={['7px','10px','15px',10]}>{boxData.title}</Text>
      <Text p={1} fontSize={['7px','10px','15px',10]}>{boxData.description.length>10?boxData.description.slice(0, 100) + "...":'No Desc.'}</Text>
    </Box>
  ))}
  </Flex>
  </Box>
  <Box h={['270px','270px','470px','470px']} maxH='470px' overflow='auto' borderRadius={10} w={['99%','99%','99%','40%']} p={5} bg='black' color='white'>
  {
            selectedBox==null?<Image h='400px' src='https://dex-bin.bnbstatic.com/new/static/images/home/build-code-1.png'/>:
            <Box>
        <Text pt={1} fontSize='15px' fontWeight='bold'>{selectedBox && selectedBox.title}</Text>
        <Text pt={2} fontSize='13px'>{selectedBox && selectedBox.description}</Text>
            </Box>
          }
      {/* <Text pt={2} fontSize={20} fontWeight='bold'>{selectedBox && selectedBox.title}</Text>
      <Text pt={2}>{selectedBox && selectedBox.description}</Text> */}
  </Box>
</Flex> 
</>
  )
}

export default Education
{/* <Image h={400} src={selectedBox==null?'https://dex-bin.bnbstatic.com/new/static/images/home/build-code-1.png':selectedBox.image}/> */}

{/* <Flex justifyContent='space-around' width='80%' pt='40px' m='auto' gap={[3,10,10,20]}>
    <a href="https://www.credential.net/f4bc70c1-fe61-4e30-a7f1-4d3ba0fa0dbb#gs.vrnylh" target='blank'>
    <Box className='certificateBox'>
    <Image  w='100%' h='100%' p={3} objectFit='cover' src='https://enstinemuki.com/wp-content/uploads/2018/07/certificate.png'/>
    </Box>
    </a>
    <a href="https://www.credential.net/f4bc70c1-fe61-4e30-a7f1-4d3ba0fa0dbb#gs.vrnylh" target='blank'>
    <Box className='certificateBox'>
    <Image  w='100%' h='100%' p={3} objectFit='cover' src='https://www.blockchainbusinessinstitute.com/wp-content/uploads/2021/02/badge.png'/>
    </Box>
    </a>
    <a href="https://www.credential.net/f4bc70c1-fe61-4e30-a7f1-4d3ba0fa0dbb#gs.vrnylh" target='blank'>
    <Box className='certificateBox'>
    <Image  w='100%' h='100%' p={3} objectFit='cover' src='https://cdn.shopify.com/s/files/1/2137/1081/products/v1-eth_280x_7e700780-1d45-4984-9ed4-e63f3cafbf05.png?v=1669213683'/>
    </Box>
    </a>
    <a href="https://www.credential.net/f4bc70c1-fe61-4e30-a7f1-4d3ba0fa0dbb#gs.vrnylh" target='blank'>
    <Box className='certificateBox' >
    <Image  w='100%' h='100%' p={3} objectFit='cover' src='https://images.credly.com/images/579f0d59-3aaa-4779-bfc6-ec383533ce19/Badge_08003801.png'/>
    </Box>
    </a>
  </Flex> */}