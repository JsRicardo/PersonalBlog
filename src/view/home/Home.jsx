import React from 'react'
import PosterSlide from './component/PosterSlider'
import Article from '../../component/article/Article'
import './style.css'

class Home extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className="main">
          <div className="main__banner">
            <PosterSlide />
          </div>
          <div className="main__blogs">
            <Article />
          </div>
        </div>
        <div className="asside">
          111
        </div>
      </div>
    )
  }
}


export default Home