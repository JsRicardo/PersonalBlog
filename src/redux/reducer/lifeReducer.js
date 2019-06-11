import * as Types from '../actionTypes'

const initState = {
  count: 0,
  pageSize: 5,
  nowPage: 0
}

export default function (state = initState, action) {
  const newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
    case Types.CHANGE_LIFE_NOWPAGE:
      newState.nowPage = action.nowPage
      return newState

    case Types.CHANGE_LIFE_COUNT:
      newState.count = action.count
      return newState

    default:
      return state
  }
}