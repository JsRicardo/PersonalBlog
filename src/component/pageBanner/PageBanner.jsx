import React from 'react'
import LinkBtn from '../linkBtn/LinkBtn'
import './style.css'

class PageBanner extends React.Component {
  render() {
    const { imgSrc, lTitle, exp } = this.props
    return (
      <div>
        <div className="blog__poster">
          <img src={imgSrc} alt="" />
        </div>
        <div className="blog__content">
          <div className="blog__top">
            <LinkBtn title={lTitle} />
            <span className='blog__exp'>{exp}</span>
          </div>
          <span className='blog__line'></span>
        </div>
      </div>
    )
  }
}

export default PageBanner