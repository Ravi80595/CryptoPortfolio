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
    <Stack style={{ width: '250px', height: '180px' }}
      bg={useColorModeValue('white', '#1e2026')}
      boxShadow={'lg'}
      p={8}
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
    <Heading as={'h3'} fontSize={'xl'} textAlign='center' color='black'>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('black', 'black')}
      fontSize={'sm'}>
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
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600} color={'white'}>{name}</Text>
        <Text w={200} textAlign='center' fontSize={'sm'} color={useColorModeValue('white', 'white')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonials2() {
  return (
    <Box bg={useColorModeValue('#1e2026', '#1e2026')}>
      <Box w='90%' m='auto' as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading pt={10} color='white'>Testimonials</Heading>
        </Stack>
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
</Box>
  )
}