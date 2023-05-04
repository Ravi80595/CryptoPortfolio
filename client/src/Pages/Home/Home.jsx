import React from 'react'
import Hero from './Hero'
import { Box } from '@chakra-ui/react'
import Contact from './Contact'
import WithSpeechBubbles from './Testimonials'
// import SuperPowers from './SuperPowers'

const Home = () => {


return (
    <Box>
      <Hero/>
      <WithSpeechBubbles/>
      {/* <SuperPowers/> */}
      <Contact/>
    </Box>
  )
}

export default Home
