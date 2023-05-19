import React from 'react'
import Hero from './Hero'
import { Box,Text} from '@chakra-ui/react'
import Contact from './Contact'
import Review from './Review'
// import WithSpeechBubbles from './Testimonials'
// import Testimonials2 from './Testimonials2'
// import SuperPowers from './SuperPowers'


const Home = () => {
  

return (
    <Box>
      <Hero/>
      <Box bg='#1e2026'>
      <Review/>
      </Box>
      <Contact/>
    </Box>
  )
}

export default Home
