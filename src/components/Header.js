import React from 'react'
import {connect} from 'react-redux'
import {setHeader} from '../actions'

class Header extends React.Component {
    static defaultProps = {
        header: 'default ' 
    }
    componentDidMount() {
        this.props.setHeader("yeah")
    }
    render () {
        const { header } = this.props;
        return (
            <div>{header}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        header: state.header.header
    }
}

export default connect(mapStateToProps, {setHeader})(Header)

