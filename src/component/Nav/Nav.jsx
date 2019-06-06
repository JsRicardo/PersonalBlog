import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

class Nav extends React.Component {
  render() {
    return (
      <div className='nav'>
        <div className="nav__wrapper">
          <div className="logo__wrapper">
            <NavLink to='/' className="logo">Ricardo个人博客</NavLink>
          </div>
          <NavLink exact to='/'>首页</NavLink>
          <NavLink exact to='/study'>学无止境</NavLink>
          <NavLink exact to='/life'>慢生活</NavLink>
          <NavLink exact to='/about'>关于我</NavLink>
          <NavLink exact to='/message'>留言</NavLink>
        </div>
      </div>
    )
  }
}

export default Nav