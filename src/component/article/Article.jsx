import React from 'react'
import './style.css'

class Article extends React.Component {
  render() {
    return (
      <div className='article'>
        <a href="#" className='article__title'>作为一个程序员,如果遭到质疑你是否能恪守自己的原则</a>
        <div className="article__content">
          <div className="content__img">
            <img src="/source/images/article1.jpg" alt="" />
          </div>
          <div className="right">
            <p className="content__blog">
              曾经有站长找我求助，他说他不知道该怎么办，自己做出来的网站，不仅没有得到大家的认可，反而让大家给他开了一个评判大会。他自己认为已经是做的最好的，却遭受大家无情sssasdkashdkajsdhiaudjb
            </p>
            <div className="content__detail">
              <div className="detail__time">
                <i></i>
                2018-07-16</div>
              <div className="detail__view">
                <i></i>
                171已阅读</div>
              <div className="detail__zan">
                <i></i>
                10赞</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Article