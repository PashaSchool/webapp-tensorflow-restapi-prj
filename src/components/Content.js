import React from 'react'
import {connect} from 'react-redux'
import {setHeader, getImages} from '../actions'

import Header from './Header'

const Image = ({url}) => (
    <div className="content-grid">
        <div className="content-box">
            <div className='item'>
                <img src={`${url}`} />
            </div>
        </div>
    </div>
)


const testStyle = function(state) {
    if (state) {
        return {
            backgroundColor: 'lightgreen'
        }
    }
    return {
        backgroundColor: 'tomato'
    }
}

class Content extends React.Component {
    static defaultProps = {
        images: [],
        header: 'Home'
    }
    state = {
        isLoaded: false
    }
    changeState = () => {
        this.setState({
            isLoaded: !this.state.isLoaded
        })
    }
    componentWillReceiveProps(newProps) {
        let {label: newHeader} = newProps.match.params;
        let {label: currentHeader} = this.props.match.params;

        if(newHeader != currentHeader) {
            this.props.setHeader(newHeader)
            this.props.getImages(newHeader)
        }
        // if((!this.props.images.length || newProps.images.length > 0) ||
        //    (this.props.images[0].label !== newHeader)) {
        //     console.log("THE DATA IS FFFFF")
        //     this.setState({isLoaded: true}, () => {
        //         console.log("The state is changed to true")
        //     })
        // }
    }
    componentDidUpdate(prevProps) {
        const {images: exImage} = this.props;
        const {images: prevImage} = prevProps;

        if(prevImage.length && exImage.length) {
            if(exImage[0].label !== prevImage[0].label) {
               /* here we finally got the new data */
            }
        }
    }
    componentDidMount() {
        const {label} = this.props.match.params;
        this.props.setHeader(label)
        this.props.getImages(label)
    }

    shouldComponentUpdate(nextProps) {
        const {images: curImages, header: curHeader} = this.props;
        const {images: nextImages} = nextProps;
        const {label: nextPosition} = nextProps.match.params;

        if(nextPosition != curHeader) {
            return true
        }
        if((!curImages.length && nextImages.length > 0)
           ||(curImages[0].label !== nextImages[0].label)){
            return true
        }

        return false
    }
    render() {
        console.log("Render")
        const {isLoaded} = this.state;
        return (
            <div className='Content'>
                <div className="content-wrapper">
                    <Header header={this.props.header}/>
                    <div className='container'>
                        {this.showImages()}
                    </div>

                    
                </div>
            </div>
        )
    }
    showImages = () => {
        const {images} = this.props;
        if(images.length) {
            return images.map((img, idx) => <Image key={idx} {...img}/>)
        }
        return
    }
}

function mapStateToProps(state) {
    return {
        images: state.images,
        header: state.header.header
    }
}

export default connect(mapStateToProps, {setHeader, getImages})(Content)