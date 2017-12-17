import React from 'react'
import {connect} from 'react-redux'
// import {setHeader} from '../actions'

class Header extends React.Component {
    static defaultProps = {
        header: 'default ' 
    }
    // componentDidMount() {
    //     this.props.setHeader("HEADER")
    // }
    render () {
        const { header } = this.props;
        return (
            <h1>{header}</h1>
        )
    }
}

function mapStateToProps(state) {
    return {
        header: state.header.header
    }
}

export default connect(mapStateToProps, null)(Header)

