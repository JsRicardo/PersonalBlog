import React from 'react'
import PageBanner from '../../component/pageBanner/PageBanner'
import Description from '../../component/description/Description'
import MessageBar from './messageBar/MessageBar'
import Comment from './comment/Comment'
import './style.css'

class Message extends React.Component {
  render() {
    return (
      <div className='message'>
        <PageBanner imgSrc={'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560253916162&di=02ae93f889de3e635bc18bdb8cd5e4f6&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F03%2F77%2F43f427df8fac6986e51a8332b8c6b757.jpg'} lTitle={'留言'} exp={'言念君子，温其如玉。'} />
        <div className="mainWrapper">
          <div className="main">
            <div className="messageWrapper">
              <MessageBar />
            </div>
            <div className="sendComment">
              <Comment />
            </div>
          </div>
          <div className="asside">
            <Description />
          </div>
        </div>
      </div>
    )
  }
}

export default Message