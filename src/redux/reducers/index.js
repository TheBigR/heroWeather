import { combineReducers } from 'redux'
import { configReducer } from './configReducer'
import { locationReducer } from './locationReducer'

const rootReducer = combineReducers({
  configReducer,
  locationReducer,
})

export default rootReducer
