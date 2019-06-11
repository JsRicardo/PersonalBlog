import * as Types from '../actionTypes'

export const setComments = (comments) => {
  const action = {
    type: Types.SET_COMMENTS,
    comments
  }
  return action
}

export const changeUser = (user) => {
  const action = {
    type: Types.CHANGE_USER,
    user
  }
  return action
}

export const changeMail = (mail) => {
  const action = {
    type: Types.CHANGE_MAIL,
    mail
  }
  return action
}

export const changeCommentContent = (content) => {
  const action = {
    type: Types.CHANGE_COMMENT_CONTENT,
    content
  }
  return action
}

export const addComment = (comment) => {
  const action = {
    type: Types.ADD_COMMENT,
    comment
  }
  return action
}