import React from 'react'
import Affiliations from '../components/home/Affiliations'
import Counter from '../components/about/Counter'
import Testimonials from '../components/about/Testimonials'
import Mission from '../components/about/Mission'
import Aboutus from '../components/about/Aboutus'

const About = () => {
  return (
    <>
      <Aboutus />
      <Counter />
      <Testimonials />
      <Mission />
      <Affiliations />
    </>
  )
}

export default About