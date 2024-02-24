import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import ImageSlider from '../Components/ImageSlider/ImageSlider'

const Home = () => {
  const slides = [
    { url: 'Sliders/SliderOne.webp', title: 'Headphones' },
    { url: 'Sliders/SliderTwo.webp', title: 'Clothings' },
    { url: 'Sliders/SliderThree.webp', title: 'Offers' },
  ]

  return (
    <div>
      <Navbar />
      <ImageSlider slides={slides} />
    </div>
  )
}

export default Home
