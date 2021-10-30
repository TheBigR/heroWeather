import * as actions from '../actions/actionTypes'

export let locationReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_LOCATION:
      return [...state, action.payload]
    case actions.DELETE_LOCATION:
      return state.filter((location) => location.key !== action.payload)
    case actions.UPDATE_LOCATION:
      return state.map((location) =>
        location.key !== action.payload.key ? location : action.payload,
      )
    default:
      return state
  }
}
