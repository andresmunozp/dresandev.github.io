import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import './slider.css'

import projectImage from '../../assets/images/project.png'

const swiperOptions = {
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 20,
  grabCursor: true
}

const sliders = [1, 2, 3, 4, 5]

const Slider = () => (
  <div className="stretched-out">
    <Swiper {...swiperOptions}>
      {
        sliders.map(index => (
          <SwiperSlide key={index}>
            <img src={projectImage} alt="project image" />
            <span>{index}</span>
          </SwiperSlide>
        ))
      }
    </Swiper>
  </div>
)

export default Slider
