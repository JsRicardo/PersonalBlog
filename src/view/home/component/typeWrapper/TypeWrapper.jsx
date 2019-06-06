import React from 'react'
import './style.css'

class TypeWrapper extends React.Component {
  render() {
    const {title, children} = this.props
    return (
      <div className='typeWrapper'>
        <h2 className='typeWrapper__title'>{title}</h2>
        <div className="typeWrapper__line"></div>
        {
          children
        }
      </div>
   )
 }
}

export default TypeWrapper