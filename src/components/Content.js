import React from 'react'
import {connect} from 'react-redux'
import {setHeader, getImages} from '../actions'

import Header from './Header'

class Content extends React.Component {
    componentWillReceiveProps(newProps) {
        const {label} = newProps.match.params;

        this.props.setHeader(label)
        this.props.getImages(label)
    }

    componentDidMount() {
        const {label} = this.props.match.params;
        this.props.getImages(label)
        this.props.setHeader(label)
    }

    render() {
        console.log("Updated")
        return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    hooasj;oihf
                </div>
            </div>
        )
    }
}

export default connect(null, {setHeader, getImages})(Content)