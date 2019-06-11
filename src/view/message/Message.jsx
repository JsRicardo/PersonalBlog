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
        <PageBanner imgSrc={'/source/images/study_poster.jpg'} lTitle={'留言'} exp={'言念君子，温其如玉。'} />
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