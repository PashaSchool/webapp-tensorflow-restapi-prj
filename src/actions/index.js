import {SET_HEADER} from '../constant'

export const setHeader = (header) => {
    return {
        type: SET_HEADER,
        data: header
    }
}