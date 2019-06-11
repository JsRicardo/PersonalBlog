import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

class LinkBtn extends React.Component {
  render() {
    const { title } = this.props
    return (
      <div>
        <Link to='/' className='tohome linkBtn'>网站首页</Link>
        <span className='thisPage linkBtn'>{title}</span>
      </div>
    )
  }
}

export default LinkBtn