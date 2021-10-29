import {
    DARK_MODE
} from './actionTypes'

export function darkModeAction(variable) {
    return {
        type: DARK_MODE,
        payload: variable
    }
}
