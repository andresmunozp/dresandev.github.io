import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import SliderItem from './SliderItem'

import 'swiper/css'
import './Slider.css'

import projects from '../../data/projects'

import type { FC } from 'react'
import type { SwiperProps } from 'swiper/react'

const swiperProps: SwiperProps = {
  loop: true,
  spaceBetween: 20
}

const Slider: FC = () => (
  <Swiper {...swiperProps}>
    {
      projects.map((project, index) => (
        <SwiperSlide key={index}>
          <SliderItem index={++index} {...project} />
        </SwiperSlide>
      ))
    }
  </Swiper>
)

export default Slider
