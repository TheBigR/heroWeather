import * as actions from './actionTypes'

export function addLocation(location) {
  return {
    type: actions.ADD_LOCATION,
    payload: location,
  }
}

export function deleteLocation(locationKey) {
  return {
    type: actions.DELETE_LOCATION,
    payload: locationKey,
  }
}

export function updateLocation(location) {
  return {
    type: actions.UPDATE_LOCATION,
    payload: location,
  }
}
