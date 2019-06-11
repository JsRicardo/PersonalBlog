import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../redux/action/commentAction'
import './style.css'

class Comment extends React.Component {

  render() {
    const { user, mail, commentContent } = this.props
    return (
      <div className='mesComment'>
        <h3>来说点什么吧...</h3>
        <p>您的姓名：<input type="text" required value={user} onChange={this.handleUser} /><span>*</span></p>
        <p>您的邮箱：<input type="text" required value={mail} onChange={this.handleMail} /><span>*</span></p>
        <p>留言内容：</p>
        <textarea name="commentContent" id="commentContent" cols="60" rows="10" value={commentContent} onChange={this.handleConten}></textarea>
        <button onClick={this.addComment}>提交</button>
        <div className='clear'></div>
      </div>
    )
  }

  handleUser = (e) => {
    const user = e.target.value
    this.props.changeUser(user)
  }

  handleMail = (e) => {
    const mail = e.target.value
    this.props.changeMail(mail)
  }

  handleConten = (e) => {
    const commentContent = e.target.value
    this.props.changeCommentContent(commentContent)
  }

  addComment = () => {
    const date = new Date()
    const day = date.getDate()
    const year = date.getFullYear()
    const month = date.getMonth() + 1

    const time = `${year}-${month}-${day}`

    const comment = {
      user: this.props.user,
      mail: this.props.mail,
      comment: this.props.commentContent,
      time
    }
    this.props.addComment(comment)
  }
}

const mapStateToProps = (state) => {
  const { user, mail, commentContent } = state.comment
  return {
    user,
    mail,
    commentContent
  }
}

export default connect(mapStateToProps, actions)(Comment)