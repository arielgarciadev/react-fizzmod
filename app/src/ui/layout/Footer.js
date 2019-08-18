import React, { Component } from 'react'
import { connect } from "react-redux"
import { NavLink } from "react-router-dom"


class Footer extends Component {
    render() {
        let {links} = this.props
        return (

        <footer>
            <NavLink to="/" exact>
            <img src="/logo.png" alt=""/>
            </NavLink>
                <nav>
                {links.map((link,i)=>
                    <NavLink to={`/${link}`} key={i} >{link}</NavLink>
                )}
                </nav>
        </footer>
        )
    }
}

export default connect(store=>({
    links : store.links
}))(Footer)