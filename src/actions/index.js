import {SET_HEADER, GET_IMAGES, CLEAR_IMAGES, POST_IMAGE} from '../constant'
import axios from 'axios'

export const setHeader = (header) => {
    return {
        type: SET_HEADER,
        data: header
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

function getResponse(response) {
    return {
        type: POST_IMAGE,
        payload: response
    }
}

export function postImage(img) {
    return dispatch => {
        axios.post("/upload", img)
        .then(res => {
            console.log(res)
            dispatch(getResponse(res.data))
        })
        .catch(e => console.log("error", e))
    }
}