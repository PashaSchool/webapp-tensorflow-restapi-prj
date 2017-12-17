import React, {Component} from 'react'
import axios from 'axios'

class Form extends Component {
    changeHandler = (e) => {
        e.preventDefault();

        // console.log(this.img.files[0])

        let data = new FormData(this.form[0])
        data.append('img', this.img.files[0])

        axios.post("/upload", data)
            .then(res => console.log("success", res))
            .catch(e => console.log("error", e))
            console.log(data)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.changeHandler} method='post' ref={n => this.form = n}>
                    <input type='file' name='img' ref={n => this.img = n}/>
                    <input type='submit' value='go'/>
                </form>
            </div>
        )
    }
}

export default Form