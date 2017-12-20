import React from 'react'

const Header = ({header}) => <h1 className="header">{header}</h1>

Header.defaultProps = {header: ""}

export default Header

