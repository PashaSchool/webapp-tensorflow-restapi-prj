import React, {Component} from 'react'
import axios from 'axios'
import {postImage} from '../actions'
import {connect} from 'react-redux'

function ImageLabel({url, label}) {
    return (
        <div className="ImageLabel">
            <div className='image-container'>
                <img className="exist_image" src={url}/>
            </div>
            <div className='label-container'>
               {label}
            </div>
        </div>
    )
}


class Form extends Component {
    static defaultProps = {
        url: '',
        label: ''
    }
    changeHandler = (e) => {
        e.preventDefault();
        console.log('submit occur')
        let data = new FormData(this.form[0])
        data.append('img', this.img.files[0])

        this.props.postImage(data)
    }

    render() {
        console.log(this.props)
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
                                <ImageLabel label={this.props.label} url={this.props.url}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        label: state.images.label,
        url: state.images.url
    }
}

export default connect(mapStateToProps, {postImage})(Form)