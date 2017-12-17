import {SET_HEADER, GET_IMAGES} from '../constant'
import axios from 'axios'

export const setHeader = (header) => {
    return {
        type: SET_HEADER,
        data: header
    }
}


const reduceImages = () => {
    return {
        type: GET_IMAGES
    }
}

export function getImages(label) {
    return (dispatch) => {
        console.log(label)
        axios.get(`/api/get_images/${label}`).then(response => {
            console.log(response)
            dispatch(reduceImages(response))
        })
    }
}
