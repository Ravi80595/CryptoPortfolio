import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from 'react';
import {Box,Flex,Heading,Text,Stack,Avatar,
useColorModeValue,
} from '@chakra-ui/react';
import './index.css'


const Testimonial = ({ children }) => {
    return <Box>{children}</Box>;
  };
  
  const TestimonialContent = ({ children }) => {
    return (
      <Stack style={{ height: '100px' }}
      w={['auto','auto','auto','200px']}
        bg={useColorModeValue('white', '#1e2026')}
        boxShadow={'lg'}
        p='5px'
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        color='white'
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {children}
      </Stack>
    );
  };
  
  const TestimonialHeading = ({ children }) => {
    return (
      <Heading as={'h3'} fontSize={'15px'} color='black'>
        {children}
      </Heading>
    );
  };
  
  const TestimonialText = ({ children }) => {
    return (
      <Text
        textAlign={'center'}
        color={useColorModeValue('black', 'black')}
        fontSize={'10px'}>
        {children}
      </Text>
    );
  };
  
  const TestimonialAvatar = ({
    src,
    name,
    title,
  }) => {
    return (
      <Flex align={'center'} mt={5} direction={'column'}>
        <Avatar src={src} alt={name} mb={1} />
        <Stack spacing={-1} align={'center'}>
          <Text fontWeight={600} color={'white'}>{name}</Text>
          <Text w={200} fontSize={'10px'} textAlign='center' color={useColorModeValue('white', 'white')}>
            {title}
          </Text>
        </Stack>
      </Flex>
    );
  };


const Review = () => {
    const [slider, setSlider] = React.useState(null);
    // const top = useBreakpointValue({ base: "90%", md: "50%" });
    // const side = useBreakpointValue({ base: "30%", md: "10px" });
  
    const settings = {
      dots: true,
      arrows: false,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

return (
    <Box width={['70%','100%','100%','70%']} m='auto' bg='#1e2026'>
         <Text pt={10} fontWeight='bold' color="#f0b90b" textAlign='center' fontSize={['30px','30px','35px','45px']} pb={10}>Testimonials</Text>
    <Slider {...settings} ref={(slider) => setSlider(slider)}>
    <Box bg='#1e2026'>
    <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}
          >
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Extraordinary</TestimonialHeading>
          <TestimonialText>
          Rohit's knowledge about the crypto world is extraordinary. He is adept at vlogging and doing analysis.
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4E03AQEgwAus8_o29A/profile-displayphoto-shrink_100_100/0/1620135420280?e=1688601600&v=beta&t=fRgv8VeQrOfvbQI9MMXtx6Ssp0tnWHY4NZWKra0ePD0'
          }
          name={'Archit Sinha'}
          title={'Web3 & Multimedia Journalist'}
        />
        </a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>A Sharp Mind</TestimonialHeading>
          <TestimonialText>
          He has a sharp mind and the right acumen for the digital marketing space. (He) always stays abreast more...</TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/D5603AQErvFYiET4AOg/profile-displayphoto-shrink_100_100/0/1669690403491?e=1688601600&v=beta&t=0AAAo6_qwjO4NU7ASPmaeMh7VosiVHoCabdMV6fHfDk'
          }
          name={'Seshasaye Kanthamraju'}
          title={' CEO of World’s biggest Film City, Ramoji'}
        /></a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Proactively</TestimonialHeading>
          <TestimonialText>
          He stepped in during the 2020 bull run and became a core part of scaling up marketing initiatives. more...
           {/* during the 2020 bull run and became a core part of scaling up marketing initiatives. Not just this, he proactively supported other team members, such as creating Live videos, building up campaigns, and being available. It is lucky to have a team member who helps with a positive build-up culture at all times. */}
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4D03AQG_n5Ep2wPIxw/profile-displayphoto-shrink_100_100/0/1648667638808?e=1688601600&v=beta&t=JYVxnIwwrG5vgk93xkVCYJYP7Sdv9lf5U4Zfmgb2v5s'
          }
          name={'Chandresh Jain'}
          title={'Heading Social Media & Community at Shardeum'}
        /></a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Resourcefull </TestimonialHeading>
          <TestimonialText>
          I was astounded by his knowledge in crypto marketing. He is so resourceful and always lends more...         </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C5103AQEz1EHoAbXhJQ/profile-displayphoto-shrink_100_100/0/1573403982788?e=1688601600&v=beta&t=gAB49cmth79M-nH-KUD10aCS6udYFD50Vu99dJC4zWQ'
          }
          name={'Dean Prasestanont'}
          title={'Head of Operations at Khiri Travel'}
        /></a>
      </Testimonial>
    </Stack>
    <Stack paddingTop={10}
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>A crypto expert</TestimonialHeading>
          <TestimonialText>
          He is a crypto expert and smart YouTuber. I endorse him for his on-chain analysis and digital marketing.</TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4E03AQHhaMJX9kujTA/profile-displayphoto-shrink_100_100/0/1631166217626?e=1689206400&v=beta&t=hHJl-Wg6XfkpnlA0g1RZ8EDf-G1_syYN0Yq0T8nv1NA'
          }
          name={'Anuj Chaudhary'}
          title={'Content Team Lead EMURGO'}
        />
        </a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Innovative</TestimonialHeading>
          <TestimonialText>
          Rohit consistently brought fresh and innovative ideas to the table and was always willing to go above and beyond mroe...
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/D4D03AQG0eZ-ewo5aBg/profile-displayphoto-shrink_100_100/0/1665048654134?e=1689206400&v=beta&t=0UEyfsIM0j_GaUPrMhzSja_DM_f1eWTsNb9YspkY0GM'
          }
          name={'Naman Sarawgi'}
          title={'Social Media Expert at WazirX'}
        /></a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Motivated</TestimonialHeading>
          <TestimonialText>
          Rohit is a very enthusiastic and motivated person who enjoys his work and also motivates others to carry out the work. 
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4D03AQFG5ZP7wdGHMQ/profile-displayphoto-shrink_100_100/0/1658815414328?e=1689206400&v=beta&t=ijl0Th3OSXnZKudykeNlP14KViLNo_LS5jbqeTOvtW4'
          }
          name={'Honey Jain'}
          title={'Marketing Manager at UNIX Gaming'}
        /></a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Reliable </TestimonialHeading>
          <TestimonialText>
          I truly enjoyed working with him, he is very easy and comfortable to work with and very reliable. </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4D03AQGfLjKWPjtySQ/profile-displayphoto-shrink_100_100/0/1621775335567?e=1689206400&v=beta&t=uPLMihkthBUJnYpFQVebvsqPDqRHtN1mIgL26_uB5EM'
          }
          name={'Sai poorna'}
          title={' Early-stage Investor & Founder of Meta V cafe'}
        /></a>
      </Testimonial>
    </Stack>
    </Box>
    <Box bg='#1e2026'>
    <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Digital marketing guru</TestimonialHeading>
          <TestimonialText>
          Rohit is a digital marketing guru and is able to plan various campaigns utilising all tools available more...       </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C5603AQE03qIhHcAZlw/profile-displayphoto-shrink_100_100/0/1607487066975?e=1689206400&v=beta&t=zSP1lBQdklBNyp9oKlREINhpE9qw0h1l_FYvgEDLAk4'
          }
          name={'Ian Tan Wei Lun'}
          title={' Co-Founder of E-Sports Business'}
        />
        </a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Impeccable</TestimonialHeading>
          <TestimonialText>
          His technical understanding about (the) crypto market and speaking skills are impeccable
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/D4E03AQH8CcC9BtDRnQ/profile-displayphoto-shrink_100_100/0/1676549969809?e=1689206400&v=beta&t=25HQXAIepxHRmjIXlC2UuS6qtnlALk18daUdLmMAym0'
          }
          name={'Ace Desai'}
          title={'Founder & CEO of Fractal Technologies '}
        /></a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Sincere</TestimonialHeading>
          <TestimonialText>
          He has deep knowledge of the sector. Rohits passion for teaching crypto shines. Rohit is sincere more...
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4D03AQGmXXtU4FGZUw/profile-displayphoto-shrink_100_100/0/1658732343474?e=1689206400&v=beta&t=c9QMtzopI718YexOgzZuHZD1MaT_Gbl5u0cM3clz8Y8'
          }
          name={'Rajagopal Menon'}
          title={'Vice President of WazirX '}
        /></a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Enthusiastic </TestimonialHeading>
          <TestimonialText>
          Rohit was always enthusiastic to complete the program. Rohit was smart as well as hard working.</TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4D03AQFri3pq2EccuA/profile-displayphoto-shrink_100_100/0/1516996004644?e=1689206400&v=beta&t=d_H2rXPsNJizf5CYH3myKmg0vHwfg5YC673giQMpqME'
          }
          name={'Niyaz Qureshi '}
          title={'Senior Specialist at Apisero'}
        /></a>
      </Testimonial>
      </Stack>
      <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Consummate</TestimonialHeading>
          <TestimonialText>
          He is the consummate business consulting professional as he has in-depth knowledge of his job more...       </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C5103AQENGB18dwfwvQ/profile-displayphoto-shrink_100_100/0/1573196328309?e=1689206400&v=beta&t=R-SMSGqKX084k9S2s_foNOarcVo6-u8UwCf4dMqT0K8'
          }
          name={'Jaspal Singh kalsi'}
          title={'Senior General Manager at Bestech Group'}
        />
        </a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Positive attitude</TestimonialHeading>
          <TestimonialText>
          He has a very positive attitude towards work. He is a quick learner and he has demonstrated responsibility towards work.
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C5603AQHxWijzD4xdxA/profile-displayphoto-shrink_100_100/0/1624889257059?e=1689206400&v=beta&t=yWCu3qlSXj-KV_QJqTo7i9DKNhBWDBGNDLMK4GpzJis'
          }
          name={'Ankit Gattani'}
          title={'Principal Consultant at Dhruva Advisors'}
        /></a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Creative</TestimonialHeading>
          <TestimonialText>
          His leadership abilities coupled with his creative thinking is what sets him apart from the rest more... 
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4E03AQF__4wMSqKNHA/profile-displayphoto-shrink_100_100/0/1602159874456?e=1689206400&v=beta&t=h9BbLtfltivAp_6nSWuN5NC62OZ7OaXaX9PenkNowW0.'
          }
          name={'Ankit Jhaveri'}
          title={'Credit Rating Analyst at Deutsche Bank'}
        /></a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Resourcefull </TestimonialHeading>
          <TestimonialText>
          I worked with Rohitt and I was astounded by his knowledge in crypto more 
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C5103AQEz1EHoAbXhJQ/profile-displayphoto-shrink_100_100/0/1573403982788?e=1688601600&v=beta&t=gAB49cmth79M-nH-KUD10aCS6udYFD50Vu99dJC4zWQ'
          }
          name={'Dean Prasestanont'}
          title={'Head of operation'}
        /></a>
      </Testimonial>
      </Stack>
    </Box>
      </Slider>
      </Box>
  )
}

export default Review
