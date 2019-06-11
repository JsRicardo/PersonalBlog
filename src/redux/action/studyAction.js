import * as Types from '../actionTypes'

export const changeCount = (count) => {
  const action = {
    type: Types.CHANGE_STUDY_COUNT,
    count
  }
  return action
}

export const changeNowPage = (nowPage) => {
  const action = {
    type: Types.CHANGE_STUDY_NOWPAGE,
    nowPage
  }
  return action
}