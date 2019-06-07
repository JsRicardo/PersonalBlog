import React from 'react'
import PageBanner from '../../component/pageBanner/PageBanner'
import Description from '../../component/description/Description'
import MessageBar from './messageBar/MessageBar'
import './style.css'

class Message extends React.Component {
  render() {
    return (
      <div className='message'>
        <PageBanner imgSrc={'/source/images/study_poster.jpg'} lTitle={'学无止境'} exp={'君子坐而论道，学生起而行之。'} />
        <div className="mainWrapper">
          <div className="main">
            <div className="messageWrapper">
              <MessageBar />
              <MessageBar />
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