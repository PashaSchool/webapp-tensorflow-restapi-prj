import React from 'react'
import {connect} from 'react-redux'
import {setHeader, getImages} from '../actions'

import Header from './Header'

const Image = ({label, url}) => (
    <div>
        <h3>{label}</h3>
        <img src={`${url}`} />
    </div>
)

class Content extends React.Component {
    static defaultProps = {
        images: [],
        header: 'empty'
    }
    componentWillReceiveProps(newProps) {
        let {label: newHeader} = newProps.match.params;
        let {label: currentHeader} = this.props.match.params;

        if(newHeader != currentHeader) {
            this.props.setHeader(newHeader)
            this.props.getImages(newHeader)
        }
    }
    componentDidUpdate(prevProps) {
        const {images: exImage} = this.props;
        const {images: prevImage} = prevProps;

        if(prevImage.length && exImage.length) {
            if(exImage[0].label !== prevImage[0].label) {
               /* here we finally got the new data */
            }
        }
        console.log("___________________________");
        console.log("componentDidUpdate")
        console.log("The prev", prevProps)
        console.log("THe current", this.props)
        console.log("___________________________");
    }
    componentDidMount() {
        const {label} = this.props.match.params;
        this.props.setHeader(label)
        this.props.getImages(label)
    }
    showImages = () => {
        const {images} = this.props;
        if(images.length) {
            return images.map((img, idx) => <Image key={idx} {...img}/>)
        }
        return
    }
    render() {
        console.log("Render")
        return (
            <div>
                <div>
                    <Header header={this.props.header}/>
                </div>
                <div>
                    {this.showImages()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        images: state.images,
        header: state.header.header
    }
}

export default connect(mapStateToProps, {setHeader, getImages})(Content)