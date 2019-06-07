import React from 'react'
import './style.css'

class LinkBtn extends React.Component {
  render() {
    const { title } = this.props
    return (
      <div>
        <a href="#" className='tohome linkBtn'>网站首页</a>
        <a href="#" className='thisPage linkBtn'>{title}</a>
      </div>
    )
  }
}

export default LinkBtn