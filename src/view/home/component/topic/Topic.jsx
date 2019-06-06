import React from 'react'
import './style.css'

class Detail extends React.Component {
  render() {
    return (
      <a href="#" className='topic' style={{background:"url('/source/images/computer.jpg') no-repeat",backgroundSize:'cover'}}>
      <div className="topic__tag">慢生活</div>
      <div className="topic__title">安静的做一个爱开发的程序员</div>
      </a>
    )
  }
}

export default Detail