import React, {Component} from 'react'
import axios from 'axios'

function ImageLabel({url, label}) {
    return (
        <div className="ImageLabel">
            <div className='image-container'>
                <img className="exist_image" src={url}/>
            </div>
            <div className='label-container'>
               Label
            </div>
        </div>
    )
}


class Form extends Component {
    changeHandler = (e) => {
        e.preventDefault();

        let data = new FormData(this.form[0])
        data.append('img', this.img.files[0])

        axios.post("/upload", data)
            .then(res => console.log("success", res))
            .catch(e => console.log("error", e))
            console.log(data)
    }
    render() {
        return (
            <div className='Content'>
                <div className="content-wrapper">
                    <div className='middle-align'>
                        <div className='form-box'>
                            <form onSubmit={this.changeHandler} method='post' ref={n => this.form = n}>
                                <input type='file' name='img' ref={n => this.img = n}/>
                                <input type='submit' value='select image'/>
                            </form>
                            <div className='load-current-imate'>
                                <button>Load current image</button>
                            </div>
                            <div className='relvative'>
                                <ImageLabel/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form