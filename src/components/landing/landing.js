import React from 'react'
import Catalog from './catalog';
import CarouselSection from './carousel'
import Stack from 'react-bootstrap/Stack';

const Landing = () => {
  return (
    <Stack>
      <CarouselSection />
      <Catalog />
    </Stack>
  )
}

export default Landing;