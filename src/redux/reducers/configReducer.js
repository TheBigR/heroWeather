import { DARK_MODE } from '../actions/actionTypes'

export let configReducer = (state = {}, action) => {
  switch (action.type) {
    case DARK_MODE:
      return { ...state, darkMode: action.payload }
    default:
      return state
  }
}
