import React from 'react'
import Description from '../../component/description/Description'
import PageBanner from '../../component/pageBanner/PageBanner'
import request from '../../helpers/request'
import './style.css'

class About extends React.Component {
  componentWillMount() {
    request('about', (data) => {
     this.refs.content.innerHTML = data.content
    })
  }
  render() {
    return (
      <div className='about'>
        <PageBanner imgSrc={'/source/images/about_poster.jpg'} lTitle={'关于我'} exp={'遇事不决，可问春风。'} />
        <div className="mainWrapper">
          <div className="main" ref='content'>
          </div>
          <div className="asside">
            <Description />
          </div>
        </div>
      </div>
    )
  }
}

export default About