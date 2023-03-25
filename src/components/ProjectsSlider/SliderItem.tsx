import React from 'react'

import type { FC } from 'react'

import './SliderItem.css'

interface SliderItemProps {
  index: number
  image: string
  description: string
}

const linkIcon = (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 1L1 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M2.5 1H16V14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const githubIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8.76471 20.545C3.2 22.2635 3.2 17.4762 1 16.8624M16.5294 23V18.7037C16.5294 17.4762 16.6588 16.9852 15.8824 16.2486C19.5059 15.8804 23 14.5301 23 8.88352C22.9984 7.41659 22.3951 6.00782 21.3176 4.95546C21.823 3.68125 21.7764 2.26918 21.1882 1.02739C21.1882 1.02739 19.7647 0.659135 16.6588 2.62317C14.0282 1.9733 11.2659 1.9733 8.63529 2.62317C5.52941 0.659135 4.10588 1.02739 4.10588 1.02739C3.51768 2.26918 3.47116 3.68125 3.97647 4.95546C2.89906 6.00782 2.29569 7.41659 2.29412 8.88352C2.29412 14.5301 5.78824 15.8804 9.41177 16.2486C8.63529 16.9852 8.63529 17.7217 8.76471 18.7037V23"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SliderItem: FC<SliderItemProps> = ({ index, image, description }) => {
  return (
    <>
      <img className="slider-image" src={image} alt="Project image" />
      <div className="slider-flex-container">
        <span className="slider-index">{index} /</span>
        <p className="slider-description">{description}</p>

        <div className="slider-links">
          <a className="slider-link" href="#">{linkIcon}</a>
          <a className="slider-link" href="#">{githubIcon}</a>
        </div>
      </div>
    </>
  )
}

export default SliderItem
