import { Box, Flex,Image,Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import WazirXLogo from '../../Images/WazirXLogo.png'
import Knight from '../../Images/Knight.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Experience = () => {
    const [data,setData]=useState([])
    const [selectedBox, setSelectedBox] = useState(null);
    const [clickedImage, setClickedImage] = useState(null);


    const handleBoxClick = (boxData) => {
      setSelectedBox(boxData);
      setClickedImage(boxData.id);
    };


const boxesData = [
    { id: 1, image:"https://lambda-apis.vercel.app/ogImage/company/62eb4293981ac9000432309a.png", title: "Head of Marketing for gDEX Metaverse", description: "As the Head of Marketing at gDEX Metaverse, I managed the complete end-to-end marketing for the P2E GameFi project, which involved planning and executing various marketing strategies to promote the project. I ensured effective social media content planning, writing, and distribution, which helped increase our social media presence and attract more users to our platform. In addition, I organised several game tournaments with games and guilds, which helped us attract more users to our platform and increase engagement.                 As part of my role, I managed press releases, articles, and blogs, which helped promote our platform and highlight its unique features. I also managed BD and partnerships with new games and guilds, which helped expand our reach and attract more users to our platform. In addition, I managed community and admin management, which involved managing our community of users and ensuring that they received the best possible support and experience while using our platform. As part of my work, I developed and designed the new pivot project called Moonstax, which helped diversify our product portfolio and attract more users to our platform. Overall, my experience in managing these various aspects of marketing has helped me develop skills such as project management, leadership, and communication, which I can leverage in my role as a crypto marketing manager." },
    { id: 2, image:WazirXLogo, title: "Crypto Marketing Manager at WazirX", description: " During my 13 months of experience as Crypto Marketing Manager at WazirX, I had the opportunity to work on a variety of projects and initiatives. One of my biggest contributions was managing the largest crypto ambassador program in the world, consisting of 500+ crypto community managers in India. This required me to develop a comprehensive strategy for recruiting, training, and managing the ambassadors, as well as creating a system for tracking their performance and engagement. Through this program, we were able to significantly increase brand awareness and user acquisition for WazirX, and establish a strong presence in the Indian crypto community.Another major project I managed was one of the biggest Influencer Marketing campaigns in crypto. This involved identifying and collaborating with leading influencers and thought leaders in the industry, and creating a range of engaging and informative content that would resonate with our target audience. By leveraging the reach and credibility of these influencers, we were able to drive significant traffic and conversions to the WazirX platform, and establish our brand as a leading player in the Indian crypto market. In addition to these initiatives, I also launched and managed India's first crypto merch store by CEX, and created educational crypto content on WazirX's YouTube channel, further expanding our reach and engagement with the crypto community." },
    { id: 3, image:"https://m.economictimes.com/thumb/msid-82771896,width-1200,height-900,resizemode-4,imgsize-312033/crypto-currency.jpg", title: "Crypto Marketing Consultant | Freelancer", description: "Working with crypto startups and DAOs across the world in helping grow their community, align marketing strategies, media articles, social media management, press releases, influencer marketing etc." },
];

const boxesData2=[
    { id: 5, image:"https://m.economictimes.com/thumb/msid-89040389,width-640,height-480,resizemode-4,imgsize-39106/header_-1.jpg", title:"Community Founder of Blockchain Noodles & MumbaiDAO",description:"As the founder of non-profit local crypto communities like Blockchain Noodles and MumbaiDAO, I have gained valuable experience in managing and growing online communities for like-minded web3 enthusiasts. With Blockchain Noodles, I help onboard new users to the crypto space and provide a platform for members to share their experiences and knowledge with others. This involves managing multiple social media channels, creating engaging content, organizing events, and facilitating discussions within the community. By doing so, I have been able to foster a supportive and collaborative environment that helps members feel confident and comfortable in navigating the complex world of cryptocurrency.Similarly, with MumbaiDAO, I have been able to create a network of professionals and enthusiasts from the financial capital of India, Mumbai. By organizing events and meetups, I have been able to connect people with similar interests and help them learn from each other. Additionally, I have been able to leverage my marketing and networking skills to promote MumbaiDAO and create partnerships with other local and international communities. Through these experiences, I have developed a strong understanding of how to build and grow communities, and how to create an environment that fosters collaboration, innovation, and learning." },
    { id: 6, image:Knight, title: "Strategic Consultant for CBRE & Knight Frank", description: "As a Strategic Consultant for top Fortune-300 organizations such as CBRE and Knight Frank, I had the privilege of working on multi-million dollar projects from around the world. I was part of the Strategic Consulting teams responsible for project management and project feasibility strategies, which involved assessing various aspects of the projects such as market dynamics, financial viability, legal and regulatory compliance, and more. The projects I worked on included airports with over 60 million footfalls, $3 billion+ metro projects, and commercial hubs with millions of square feet. The clients I worked with included industry leaders such as Hilton, Fortune, Morgan Stanley, and Blackstone. Through my experience, I developed a strong understanding of the real estate industry and the various factors that impact the success of large-scale projects.My prior experience as a Strategy and Financial Advisor at CBRE gave me the opportunity to work closely with clients to understand their needs and requirements, and provide them with customized solutions that met their specific objectives. I gained valuable insights into the workings of the real estate industry, and developed expertise in areas such as market research, financial analysis, and project management. Through my work, I honed my analytical skills and learned how to communicate complex concepts in a clear and concise manner. As a Strategic Consultant, I was able to leverage this experience and knowledge to provide high-quality advisory services to my clients, helping them to achieve their strategic goals and objectives." },
]



return (
    <>
     <Flex gap={10} p={[2,2,5,10]} direction={['column-reverse','column-reverse','column-reverse','row']} data-aos="fade-up">
        <Box w={['99%','99%','99%','60%']}>
        <Flex mb={10} gap={5} overflowX='auto' maxWidth={['99%','99%','99%','99%']} p={[2,2,10,10]}>
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
              transform: clickedImage === boxData.id ? 'translateY(-25px)' : 'none',
            }}
          >
            <Image
            style={{
              filter: clickedImage === boxData.id ? 'none' : 'grayscale(100%)',
              transition: 'filter 0.5s',
            }}
            className='image' filter='grayscale(100%)' borderRadius={10} borderBottomRadius={0} w='100%' h={150} src={boxData.image}/>
            <Text p={2}>{boxData.title}</Text>
            <Text p={2} fontSize={10}>{boxData.description.length>10?boxData.description.slice(0, 150) + "...":'r'}</Text>
          </Box>
        ))}
        </Flex>
        <Flex w={['99%','100%','99%','80%']} m='auto' p={10} pt={2} gap={20}>
        {boxesData2 && boxesData2.map((boxData) => (
          <Box cursor='pointer'
            key={boxData.id}
            data={boxData}
            onClick={() => handleBoxClick(boxData)}
            w={250}
            borderRadius={10}
            bg='black'
            color='white'
            boxShadow='rgb(242 255 0 / 16%) 0px 10px 9px 0px, rgb(255 221 0 / 6%) 0px 0px 0px 1px'
            style={{
              transition: 'transform 0.5s, filter 0.5s',
              transform: clickedImage === boxData.id ? 'translateY(-25px)' : 'none',
            }}
          >
            <Image
            style={{
              filter: clickedImage === boxData.id ? 'none' : 'grayscale(100%)',
              transition: 'filter 0.5s',
            }}
            className='image' filter='grayscale(100%)' borderRadius={10} borderBottomRadius={0} w='100%' h={150} src={boxData.image}/>
            <Text p={2}>{boxData.title}</Text>
            <Text p={2} fontSize={10}>{boxData.description.length>10?boxData.description.slice(0, 150) + "...":'r'}</Text>
          </Box>
        ))}
        </Flex>
        </Box>
        <Box border='12px ridge #f0b90b' borderRadius={10} w={['99%','99%','99%','40%']} p={5} bg='white'>
            <Image h={400} src={selectedBox==null?'https://dex-bin.bnbstatic.com/new/static/images/home/build-code-1.png':selectedBox.image}/>
            <Text pt={2} fontSize={20} fontWeight='bold'>{selectedBox && selectedBox.title}</Text>
            <Text pt={2}>{selectedBox && selectedBox.description}</Text>
        </Box>
    </Flex> 
    </>
  )
}

export default Experience
