import {SET_HEADER, GET_IMAGES, CLEAR_IMAGES} from '../constant'
import axios from 'axios'

export const setHeader = (header) => {
    return {
        type: SET_HEADER,
        data: header
    }
}

export const clearImages = () => {
    return {
        type: CLEAR_IMAGES
    }
}

const reduceImages = (images) => {
    return {
        type: GET_IMAGES,
        payload: images.data
    }
}

export function getImages(label) {
    return (dispatch) => {
        axios.get(`/api/get_images/${label}`).then(response => {
            console.log(response)
            dispatch(reduceImages(response))
        })
    }
}
