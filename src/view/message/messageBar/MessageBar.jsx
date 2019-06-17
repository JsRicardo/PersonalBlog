import React from 'react'
import request from '../../../helpers/request'
import * as actions from '../../../redux/action/commentAction'
import { connect } from 'react-redux'
import './style.css'

class MessageBar extends React.Component {

  componentWillMount() {
    request('comment', (comments) => {
      this.props.setComments(comments)
    })
  }

  render() {
    const comments = this.props.comments
    return (
      <div>
        {
          comments.map((item, index) => {
            return (
              <div className='messageBar' key={item + index}>
                <div className="messageBar__avatar">
                  <img src="http://f.jiangpaipinpai.com/img/caseimg/blogImg/images/default-avatar.jpg" alt="" />
                </div>
                <div className="messageBar__right">
                  <div className="right__top">
                    <h1 className='messageBar__username'>{item.user}</h1>
                    <span className='messageBar__time'>{item.time}</span>
                  </div>
                  <p className="messageBar__content">{item.comment}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  comments: state.comment.comments
})


export default connect(mapStateToProps, actions)(MessageBar)