import React from 'react'
import Hero from '../Components/Hero'
import { Box } from '@chakra-ui/react'
import Contact from '../Components/Contact'
import WithSpeechBubbles from '../Components/Testimonials'
import SuperPowers from '../Components/SuperPowers'

const Home = () => {


return (
    <Box>
      <Hero/>
      <WithSpeechBubbles/>
      <SuperPowers/>
      <Contact/>
    </Box>
  )
}

export default Home
