import React from 'react'
import './style.css'

class MessageBar extends React.Component {
  render() {
    return (
      <div className='messageBar'>
        <div className="messageBar__avatar">
          <img src="/source/images/default-avatar.jpg" alt="" />
        </div>
        <div className="messageBar__right">
          <div className="right__top">
            <h1 className='messageBar__username'>马云</h1>
            <span className='messageBar__time'>2018-07-16</span>
          </div>
          <p className="messageBar__content">
            小伙子不错，有前途！今后一定要来我们公司！阿萨德卢卡斯滴啊手机吊扇灯克拉斯等你哦给啊胡达拉斯可能都会 阿萨德好弄啊收到货。
          </p>
        </div>
      </div>
    )
  }
}

export default MessageBar