import React from 'react'


class Header extends React.Component {
    static defaultProps = {
        header: 'default ' 
    }

    render () {
        const { header } = this.props;
        return (
            <h1>{header}</h1>
        )
    }
}

export default Header

