import * as Types from '../actionTypes'

export const changeCount = (count) => {
  const action = {
    type: Types.CHANGE_LIFE_COUNT,
    count
  }
  return action
}

export const changeNowPage = (nowPage) => {
  const action = {
    type: Types.CHANGE_LIFE_NOWPAGE,
    nowPage
  }
  return action
}