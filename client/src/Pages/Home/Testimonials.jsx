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
        <Text fontSize={'sm'} color={useColorModeValue('white', 'white')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
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
          title={'Multimedia journlist'}
        />
        </a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Sharp Mind</TestimonialHeading>
          <TestimonialText>
          I have known Rohit through my work at gDEX. He has a sharp mind and the right acumen for more...
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/D5603AQErvFYiET4AOg/profile-displayphoto-shrink_100_100/0/1669690403491?e=1688601600&v=beta&t=0AAAo6_qwjO4NU7ASPmaeMh7VosiVHoCabdMV6fHfDk'
          }
          name={'Seshasaye K'}
          title={'ex Disney'}
        /></a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>WazirX community</TestimonialHeading>
          <TestimonialText>
          Rohit has immensely grown WazirX community and campaigns in need of the hour. He stepped in more...
           {/* during the 2020 bull run and became a core part of scaling up marketing initiatives. Not just this, he proactively supported other team members, such as creating Live videos, building up campaigns, and being available. It is lucky to have a team member who helps with a positive build-up culture at all times. */}
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4D03AQG_n5Ep2wPIxw/profile-displayphoto-shrink_100_100/0/1648667638808?e=1688601600&v=beta&t=JYVxnIwwrG5vgk93xkVCYJYP7Sdv9lf5U4Zfmgb2v5s'
          }
          name={'Chandresh Jain'}
          title={'Social & Comunnity at sherdum'}
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
      <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Youtuber</TestimonialHeading>
          <TestimonialText>
          I worked with Rohit at WazirX. He is a crypto expert and smart YouTuber. I endorse him for his more...</TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4E03AQHhaMJX9kujTA/profile-displayphoto-shrink_100_100/0/1631166217626?e=1689206400&v=beta&t=hHJl-Wg6XfkpnlA0g1RZ8EDf-G1_syYN0Yq0T8nv1NA'
          }
          name={'Anuj Chaudhary'}
          title={'Ex-Bloomberg'}
        />
        </a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Valuable</TestimonialHeading>
          <TestimonialText>
          I had the pleasure of working with Rohit on the Marketing team at WazirX and can confidently mroe...
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/D4D03AQG0eZ-ewo5aBg/profile-displayphoto-shrink_100_100/0/1665048654134?e=1689206400&v=beta&t=0UEyfsIM0j_GaUPrMhzSja_DM_f1eWTsNb9YspkY0GM'
          }
          name={'Naman Sarawgi'}
          title={'Web3 Content Marketer'}
        /></a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Motivated</TestimonialHeading>
          <TestimonialText>
          Rohit sir is a very enthusiastic and motivated person who enjoys his work and also motivated others to carry out the work. 
           {/* during the 2020 bull run and became a core part of scaling up marketing initiatives. Not just this, he proactively supported other team members, such as creating Live videos, building up campaigns, and being available. It is lucky to have a team member who helps with a positive build-up culture at all times. */}
          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4D03AQFG5ZP7wdGHMQ/profile-displayphoto-shrink_100_100/0/1658815414328?e=1689206400&v=beta&t=ijl0Th3OSXnZKudykeNlP14KViLNo_LS5jbqeTOvtW4'
          }
          name={'Honey Jain'}
          title={'NFT expert'}
        /></a>
      </Testimonial>
      <Testimonial>
        <TestimonialContent>
          <TestimonialHeading>Reliable </TestimonialHeading>
          <TestimonialText>
          I had a chance to work with Rohit when he was at an exchange, I truly enjoyed working with him more...          </TestimonialText>
        </TestimonialContent>
        <a href="https://www.linkedin.com/in/rohitkundliwal/details/recommendations/" target='blank'>
        <TestimonialAvatar
          src={
            'https://media.licdn.com/dms/image/C4D03AQGfLjKWPjtySQ/profile-displayphoto-shrink_100_100/0/1621775335567?e=1689206400&v=beta&t=uPLMihkthBUJnYpFQVebvsqPDqRHtN1mIgL26_uB5EM'
          }
          name={'Sai poorna'}
          title={'Head of operation'}
        /></a>
      </Testimonial>
      </Stack>
  </Box>
</Box>
  )
}