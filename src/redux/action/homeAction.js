import * as Types from '../actionTypes'

export const setArticleList = (articleList) => {
  const action = {
    type: Types.SET_ARTICLE_LIST,
    articleList
  }
  return action
}

export const changeNowPage = (nowPage) => {
  const action = {
    type: Types.CHANGE_NOW_PAGE,
    nowPage
  }
  return action
}