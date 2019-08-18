import React, { Component } from 'react'
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"
import Link from '@material-ui/core/Link';

class Header extends Component {
    render() {
        let {links} = this.props
        return (
            <header>
                    <Link
      component="button"
      variant="body2"      
    >
      <NavLink to="/" exact>
                    <img src="/logo.png" alt="" />
      </NavLink>
    </Link>
                <nav>
                {links.map((link,i)=>
                    <NavLink to={`/${link}`} key={i} >{link}</NavLink>
                )}
                </nav>
            </header>
        )
    }
}

export default connect(store=>({
    links : store.links
}))(Header)

