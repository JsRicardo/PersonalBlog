import * as Types from './actionTypes'

export const setArticleList = (articleList) => {
  const action = {
    type: Types.SET_ARTICLE_LIST,
    articleList
  }
  return action
}