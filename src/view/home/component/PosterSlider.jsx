import React from 'react'
import Slider from 'react-slick'
import './style.css'

const PosterSlide = () => {
  const settings = {
    dots: true,
    autoplay: true,
    speed: 300,
    className: 'posterSlide',
    dotsClass: 'posterSlideDots'
  }

  return (
    <Slider {...settings}>
      <div className="imageSlider__item">
        <img className="imageSlider__img" src="/source/images/banner01.jpg" alt="" />
      </div>
      <div className="imageSlider__item">
        <img className="imageSlider__img" src="/source/images/banner03.jpg" alt="" />
      </div>
      <div className="imageSlider__item">
        <img className="imageSlider__img" src="/source/images/banner02.jpg" alt="" />
      </div>
    </Slider>
  )
}

export default PosterSlide