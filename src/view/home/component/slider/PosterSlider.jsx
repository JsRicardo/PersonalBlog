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
        <img className="imageSlider__img" src="http://www.yangqq.com/d/file/jstt/bj/2018-06-29/3f0b6da48a6fd4e626a021ff7bd0d74f.jpg" alt="" />
      </div>
      <div className="imageSlider__item">
        <img className="imageSlider__img" src="https://www.yangqq.com/skin/852/images/banner03.jpg" alt="" />
      </div>
      <div className="imageSlider__item">
        <img className="imageSlider__img" src="https://www.yangqq.com/skin/852/images/banner01.jpg" alt="" />
      </div>
    </Slider>
  )
}

export default PosterSlide