import * as Types from './actionTypes'

const initState = {
  articleList: [1],
  nowPage: 0,
  pageSize: 1,
  count: 0
}

export default function (state = initState, action) {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case Types.SET_ARTICLE_LIST:
      newState.articleList = action.articleList
      newState.count = action.articleList.length + 1
      return newState
    default:
      return state
  }
}