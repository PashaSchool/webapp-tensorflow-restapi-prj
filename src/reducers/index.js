import {combineReducers} from 'redux'

import {SET_HEADER} from '../constant'

const header = (state = {}, action) => {
    switch(action.type) {
        case SET_HEADER:
            return {...state, header: action.data}
        default:
            return state
    }
    return state
}

const reducer = combineReducers({
    header
})


export default reducer