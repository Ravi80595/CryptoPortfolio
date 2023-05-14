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
    <Stack style={{ height: '180px' }}
    w={['auto','auto','auto','250px']}
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
    <Heading as={'h3'} fontSize={'xl'} color='black'>
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
        <Text w={200} fontSize={'sm'} textAlign='center' color={useColorModeValue('white', 'white')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('#1e2026', '#1e2026')} data-aos="fade-up">
      <Box w='90%' m='auto' as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading pt={10} color='white'>Testimonials</Heading>
        </Stack>
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
      <Stack
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
</Box>
  )
}