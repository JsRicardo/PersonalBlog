import * as Types from '../actionTypes'

const initState = {
  comments: [],
  user: '',
  mail: '',
  commentContent: ''
}

export default function (state = initState, action) {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case Types.SET_COMMENTS:
      newState.comments = action.comments
      return newState

    case Types.CHANGE_USER:
      newState.user = action.user
      return newState

    case Types.CHANGE_MAIL:
      newState.mail = action.mail
      return newState

    case Types.CHANGE_COMMENT_CONTENT:
      newState.commentContent = action.content
      return newState

    case Types.ADD_COMMENT:
      newState.comments = [...newState.comments, action.comment]
      newState.user = ''
      newState.mail = ''
      newState.commentContent = ''
      return newState

    default:
      return state
  }
}