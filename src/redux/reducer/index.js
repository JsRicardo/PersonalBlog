import { combineReducers } from 'redux'

import life from './lifeReducer'
import study from './studyReducer'
import home from './homeReducer'
import comment from './commentReducer'

export default combineReducers({
  life,
  study,
  home,
  comment
})