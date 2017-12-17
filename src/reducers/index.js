import {combineReducers} from 'redux'

import {SET_HEADER, GET_IMAGES, CLEAR_IMAGES} from '../constant'

const header = (state = {}, action) => {
    switch(action.type) {
        case SET_HEADER:
            return {...state, header: action.data}
        default:
            return state
    }
    return state
}

const images = (state=[], action) => {
    switch(action.type) {
        case GET_IMAGES:
            return [...action.payload]
        case CLEAR_IMAGES:
            return []
        default:
            return state
    }
    return state 
}



const reducer = combineReducers({
    header,
    images
})


export default reducer